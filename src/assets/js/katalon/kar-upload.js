var waitDialog;

function showBackupDisabledStatus() {
    updateBackupStatus(`<a href="${testOpsEndpoint}" target="_blank" class="katalon-link">Sign in</a> to enable automatic backup.`);
    hideBackupRestoreButton();
}

function showBackupEnabledStatus() {
    updateBackupStatus(`Automatic backup to <a href="${testOpsEndpoint}" target="_blank" class="katalon-link" target="_blank">Katalon TestOps</a> is enabled.`);
    showBackupRestoreButton();
}

function updateBackupStatus(html) {
    $('#backup-status').html(html);
}

function backupData() {
    return chrome.storage.local.get(null, function(result) {
        $.ajax({
            url: testOpsUrls.getUploadUrlAvatar,
            type: 'GET',
            success: function(response) {
                var path = response.path;
                var uploadUrl = response.uploadUrl;
                var data = JSON.stringify(result);

                $.ajax({
                    url: uploadUrl,
                    type: 'PUT',
                    contentType: 'text/plain',
                    data: data,
                    success: function() {
                        $.ajax({
                            url: testOpsUrls.uploadBackup,
                            type: 'POST',
                            data: {
                                uploadedPath: path
                            },
                            success: function() {
                                showBackupEnabledStatus();
                            },
                            error: function() {
                                console.log(arguments);
                                showBackupDisabledStatus();
                            }
                        });
                    },
                    error: function() {
                        console.log(arguments);
                        showBackupDisabledStatus();
                    }
                });
            },
            error: function() {
                showBackupDisabledStatus();
                console.log(arguments);
            }
        });
    });
}

function uploadTestReportsToTestOps(teamId, projectId, autouploaded) {

    try {
        _gaq.push(['_trackEvent', 'uploadTestReports', '' + autouploaded]);
    } catch (e) {

    }

    var executionUrl = teamId ? `${testOpsEndpoint}/team/${teamId}/project/${projectId}/executions` : null;

    $.ajax({
        url: testOpsUrls.getUploadUrl,
        type: 'GET',
        data: {
            projectId: projectId
        },
        success: function (response) {
            var path = response.path;
            var uploadUrl = response.uploadUrl;

            // see save-log button
            var logcontext = '';
            var logcontainer = document.getElementById('logcontainer');
            for (var i = 0; i < logcontainer.childNodes.length; i++) {
                logcontext = logcontext + logcontainer.childNodes[i].textContent + '\n';
            }

            $.ajax({
                url: uploadUrl,
                type: 'PUT',
                contentType: 'text/plain',
                data: logcontext,
                success: function () {
                    $.ajax({
                        url: testOpsUrls.uploadTestReports,
                        type: 'POST',
                        data: {
                            projectId: projectId,
                            batch: new Date().getTime(),
                            isEnd: true,
                            fileName: 'KR-' + new Date().getTime() + '.log',
                            uploadedPath: path
                        },
                        success: function () {
                            if (executionUrl) {
                                showDialog('Execution logs have been uploaded successfully. Please give us a few minutes to analyze the data. Thank you!', true);
                                window.open(executionUrl);
                            }
                        },
                        error: function () {
                            console.log(arguments);
                            showErrorDialog();
                        }
                    });
                },
                error: function () {
                    console.log(arguments);
                    showErrorDialog();
                }
            });
        },
        error: function () {
            console.log(arguments);
            showErrorDialog();
        }
    });
}

$(function() {
    var dialog = $( '#ka-select-project-dialog');
    dialog.dialog({
        autoOpen: false,
        resizable: false,
        height: 'auto',
        modal: true,
        buttons: {
            Upload: function() {

                $(this).dialog('close');

                waitDialog = showDialog('Uploading...', false);
                var select = $('#select-ka-project');
                var projectId = select.val();
                var teamId = select.find(':selected').attr('data-teamId');
                uploadTestReportsToTestOps(teamId, projectId, false);
            },
            Cancel: function() {
                $(this).dialog('close');
            }
        }
    });


    function createDefaultProject(email) {
        return $.ajax({
            url: testOpsUrls.createOrganizationUrl,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                name: `Organization ${email}`
            })
        }).then(org => {
            console.log(org);
            return $.ajax({
                url: testOpsUrls.createTeamUrl,
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    name: `Team ${email}`,
                    organizationId: org.id
                })
            });
        }).then(team => {
            return $.ajax({
                url: testOpsUrls.createProjectUrl,
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    name: `Project ${email}`,
                    teamId: team.id
                })
            });
        }).then(project => {
            return Promise.resolve([project])
        });
    }

    function getProjects() {
        return $.ajax({
            url: testOpsUrls.getUserInfo,
            type: 'GET',
        }).then(data => {
            if (data.projects.length == 0) {
                return $.ajax({
                    url: testOpsUrls.getFirstProject,
                    type: 'GET',
                });
            } else {
                return data.projects;
            }
        });
    }

    $(document).on('click', '#ka-upload,#ka-upload-log', function() {
        getProjects()
            .then(projects => {
                var select = $('#select-ka-project');
                select.empty();
                projects.forEach(function(project) {
                    select.append($('<option/>')
                        .attr('value', project.id)
                        .attr('data-teamId', project.team.id)
                        .text(project.name)
                    );
                });
                dialog.dialog('open');
            }).catch(e => {
                console.log(e);
                var dialogHtml = `
                    <img class="kto-light" style="max-width: 50%;" src="../../../katalon/images/branding/Katalon-TestOps-full-color-large-w.png" alt="Katalon TestOps" />
                    <img class="kto-dark" style="max-width: 50%;" src="../../../katalon/images/branding/Katalon-TestOps-full-color-large.png" alt="Katalon TestOps" />
                    <p>Please log in to <a target="_blank" href="${testOpsEndpoint}" class="testops-link">Katalon TestOps (beta)</a> first and try again.</p>
                    <p>You can register a completely free account at <a target="_blank" href="${katalonEndpoint}" class="testops-link">katalon.com</a>.</p>
                    <p>Katalon TestOps helps you manage automation results as you test it manually and generate quality, performance and flakiness reports to improve your confidence in evaluating the test results. 
                    Katalon TestOps supports both <a target="_blank" href="${katalonEndpoint}" class="testops-link">Katalon Studio</a> (one of the top 10 test automation solutions) and Katalon Recorder.</p>
                    <p style="margin-bottom: 0;"><a target="_blank" href="${katalonEndpoint}/testops/" class="testops-link">Learn more</a> about Katalon TestOps (Beta).</p>'
                `;
                showDialog(dialogHtml, true);
            });
    });

    $('#ka-open').on('click', function() {
        console.log('open testops');
        window.open(testOpsEndpoint);
    });
});