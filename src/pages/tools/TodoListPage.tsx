
import React from 'react';
import TodoList from '@/components/tools/TodoList';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, Target, Clock, CheckCircle } from 'lucide-react';

const TodoListPage = () => {
  return (
    <PageWrapper
      title="Todo List Manager"
      description="Professional todo list and task manager with local storage. Organize your tasks, set priorities, and boost productivity with our intuitive task management tool."
      keywords="todo list, task manager, productivity tool, task organizer, to-do app, task list, project management, personal organizer"
      pageTitle="Todo List Manager"
      toolCategory="Productivity Tool"
      canonicalUrl="https://fyntools.com/todo-list"
      heroImage="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <ListChecks className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Todo List Manager
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Organize your tasks and boost productivity with our intuitive todo list manager.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Goal Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Track progress and achieve your goals</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Local Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Your data is saved locally in your browser</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Easy Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Add, edit, and complete tasks effortlessly</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Todo List */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <ListChecks className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Task Manager
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional task organization and productivity tool
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <TodoList />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Personal Productivity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Stay organized and focused with a simple yet powerful task management system. Perfect for 
                  daily planning, goal setting, and tracking personal projects. Create tasks, mark them as 
                  complete, and maintain momentum in your personal and professional life. The clean interface 
                  helps you focus on what matters most without distractions.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Work & Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Manage work tasks, project deadlines, and team responsibilities effectively. Break down 
                  large projects into manageable tasks, set priorities, and track progress. Ideal for 
                  freelancers, remote workers, and team members who need a simple way to stay on top of 
                  their workload and ensure nothing falls through the cracks.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Privacy & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Your tasks are stored locally in your browser, ensuring complete privacy and security. 
                  No account registration required, no data sent to servers, and no privacy concerns. 
                  Your todo list is accessible only to you, making it perfect for sensitive work tasks, 
                  personal goals, or confidential project planning.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Learning & Habits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Build positive habits and track learning goals with consistent task management. Perfect 
                  for students managing assignments, professionals developing new skills, or anyone working 
                  on personal development. Use it to create daily routines, track study sessions, or 
                  monitor progress on long-term learning objectives.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TodoListPage;
