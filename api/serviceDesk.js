"use strict";

module.exports = ServiceDeskClient;

/**
 * Used to access Jira REST endpoints in '/rest/servicedeskapi/request'
 *
 * @param {JiraClient} jiraClient
 * @constructor ServiceDeskClient
 */
function ServiceDeskClient(jiraClient) {
    this.jiraClient = jiraClient;

    /**
     * Returns currently logged user. This resource cannot be accessed anonymously.
     *
     * @method getCustomerRequests
     * @memberOf ServiceDeskClient#
     * @param opts Ignored
     * @param [debug] Enables debugging
     * @param [callback] Called when the current user is retrieved.
     * @return {Promise} Resolved when the current user is retrieved.
     */
    this.getQueue = function(opts, debug, callback) {
        var options = {
            uri: this.jiraClient.buildServiceDeskURL('/servicedesk') + '/' + opts.projectId + '/queue/' + opts.queueId + '/issue',
            method: 'GET',
            json: true,
            followAllRedirects: true,
            debug: debug,
        };

        return this.jiraClient.makeRequest(options, callback);
    };

}