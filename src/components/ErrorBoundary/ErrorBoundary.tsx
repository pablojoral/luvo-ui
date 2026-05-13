import React from 'react';
import { ErrorScreen, type ErrorScreenProps } from './ErrorScreen';

export interface ErrorBoundaryProps extends Omit<ErrorScreenProps, 'onReset'> {
  readonly children: React.ReactNode;
}

interface ErrorBoundaryState {
  readonly hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorScreen
          onReset={this.handleReset}
          title={this.props.title}
          body={this.props.body}
          retryLabel={this.props.retryLabel}
        />
      );
    }
    return this.props.children;
  }
}
