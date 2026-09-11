package com.anushka.todo_app;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;  //When a POST request comes to /tasks, execute the method immediately below."
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.ArrayList;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://todo-app-rouge-one-18.vercel.app"
})
public class TaskController {

    private ArrayList<Task> tasks = new ArrayList<>();

    @PostMapping
    public Task addTask(@RequestBody Task task) {
        tasks.add(task);
        return task;
    }

    @GetMapping
    public ArrayList<Task> getTask() {
        return tasks;
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable long id) {
        tasks.removeIf(task -> task.getId() == id);
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable long id) {

        for (Task task : tasks) {
            if (task.getId() == id) {
                task.setCompleted(!task.isCompleted());
                return task;
            }
        }

        return null;
    }
}