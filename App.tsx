import React from 'react';
import { ScreenState } from './src/context/screen/screen.state';
import { TodoState } from './src/context/todo/todo.state';
import { MainLayout } from './src/main.layout';

export default function App() {

  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  );
}
