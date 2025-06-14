
import React from 'react';
import TodoList from '@/components/tools/TodoList';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks } from 'lucide-react'; // Icon for To-Do List

const TodoListPage = () => {
  return (
    <div className="max-w-lg mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <ListChecks className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">To-Do List</CardTitle>
          </div>
          <CardDescription>Organize your tasks. Data is saved in your browser's local storage.</CardDescription>
        </CardHeader>
        <CardContent>
          <TodoList />
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoListPage;
