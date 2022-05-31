class TaskList {
    constructor(id, name, tasks) {
        this.id = id;
        this.name = name;
        this.tasks = tasks || [];
    }

    static fromJson(json) {
        return new TaskList(json.id, json.name, json.tasks);
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            tasks: this.tasks
        };
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
    }

    updateTask(task) {
        let index = this.tasks.findIndex(t => t.id === task.id);
        this.tasks[index] = task;
    }

    getTask(id) {
        return this.tasks.find(t => t.id === id);
    }

    getTasks() {
        return this.tasks;
    }

    getTasksByStatus(status) {
        return this.tasks.filter(t => t.status === status);
    }

    getTasksByPriority(priority) {
        return this.tasks.filter(t => t.priority === priority);
    }
}

class Task {
    constructor(id, name, description, status, priority) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.priority = priority;
    }

    static fromJson(json) {
        return new Task(json.id, json.name, json.description, json.status, json.priority);
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            status: this.status,
            priority: this.priority
        };
    }


    setStatus(status) {
        this.status = status;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    setName(name) {
        this.name = name;
    }
}

export { TaskList, Task };