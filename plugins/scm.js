'use strict';
const Joi = require('joi');
const models = require('../models');
const scmUrl = Joi.reach(models.pipeline.base, 'scmUrl').required();
const token = Joi.reach(models.user.base, 'token').required();
const sha = Joi.reach(models.build.base, 'sha').required();
const buildStatus = Joi.reach(models.build.base, 'status').required();
const jobName = Joi.reach(models.job.base, 'name').optional();

const GET_PERMISSIONS = Joi.object().keys({
    scmUrl,
    token
}).required();

const GET_COMMIT_SHA = Joi.object().keys({
    scmUrl,
    token
}).required();

const UPDATE_COMMIT_STATUS = Joi.object().keys({
    scmUrl,
    token,
    sha,
    buildStatus,
    jobName,
    url: Joi.string().uri().optional()
}).required();

const GET_FILE = Joi.object().keys({
    scmUrl,
    token,
    path: Joi.string().required(),
    ref: Joi.string().optional()
}).required();

const GET_REPO_ID = Joi.object().keys({
    scmUrl,
    token
}).required();

module.exports = {
    /**
     * Properties for Scm Base that will be passed for the getPermissions method
     *
     * @property getPermissions
     * @type {Joi}
     */
    getPermissions: GET_PERMISSIONS,

    /**
     * Properties for Scm Base that will be passed for the getCommitSha method
     *
     * @property getCommitSha
     * @type {Joi}
     */
    getCommitSha: GET_COMMIT_SHA,

    /**
     * Properties for Scm Base that will be passed for the updateCommitStatus method
     *
     * @property updateCommitStatus
     * @type {Joi}
     */
    updateCommitStatus: UPDATE_COMMIT_STATUS,

    /**
     * Properties for Scm Base that will be passed for the getFile method
     *
     * @property getFile
     * @type {Joi}
     */
    getFile: GET_FILE,

    /**
     * Properties for Scm Base that will be passed for the getRepoId  method
     *
     * @property getRepoId
     * @type {Joi}
     */
    getRepoId: GET_REPO_ID
};
