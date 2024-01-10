
export default class Bug {
    constructor(id, title, description, status, priority, severity, creator_id, relavant_id, resolution, attachments, comments_id, requirement_id, environment, version, related_issues, create_time, update_time) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.severity = severity;
        this.creator_id = creator_id;
        this.relavant_id = relavant_id;
        this.resolution = resolution;
        this.attachments = attachments;
        this.comments_id = comments_id;
        this.requirement_id = requirement_id;
        this.environment = environment;
        this.version = version;
        this.related_issues = related_issues;
        this.create_time = create_time;
        this.update_time = update_time;
    }
    getBugId() {
        return this.id;
    }
    getBugTitle() {
        return this.title;
    }
    getBugDescription() {
        return this.description;
    }
    getBugStatus() {
        return this.status;
    }
    getBugPriority() {
        return this.priority;
    }
    getBugSeverity() {
        return this.severity;
    }
    getBugCreatorId() {
        return this.creator_id;
    }
    getBugRelavantId() {
        return this.relavant_id;
    }
    getBugResolution() {
        return this.resolution;
    }
    getBugAttachments() {
        return this.attachments;
    }
    getBugCommentsId() {
        return this.comments_id;
    }
    getBugRequirementId() {
        return this.requirement_id;
    }
    getBugEnvironment() {
        return this.environment;
    }
    getBugVersion() {
        return this.version;
    }
    getBugRelatedIssues() {
        return this.related_issues;
    }
    getBugCreateTime() {
        return this.create_time;
    }
    getBugUpdateTime() {
        return this.update_time;
    }
    setBugId(id) {
        this.id = id;
    }
    setBugTitle(title) {
        this.title = title;
    }
    setBugDescription(description) {
        this.description = description;
    }
    setBugStatus(status) {
        this.status = status;
    }
    setBugPriority(priority) {
        this.priority = priority;
    }
    setBugSeverity(severity) {
        this.severity =severity;}

}