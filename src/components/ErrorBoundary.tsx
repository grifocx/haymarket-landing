import { Component, ReactNode } from 'react';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-neutral-50">
          <div className="text-center max-w-2xl">
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-100 rounded-full">
                  <AlertCircle size={64} className="text-red-600" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-lg text-neutral-600 mb-8">
                We encountered an unexpected error. Don't worry, our team has been notified and we're working on it.
              </p>
              {import.meta.env.DEV && this.state.error && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                  <p className="text-sm font-mono text-red-800 break-all">
                    {this.state.error.toString()}
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={this.handleReset}
                className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                <RefreshCw size={20} />
                Try Again
              </button>
              <a
                href="/"
                className="flex items-center gap-2 px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg hover:bg-neutral-200 transition-colors font-medium"
              >
                <Home size={20} />
                Back to Home
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-200">
              <p className="text-neutral-600 mb-4">Need immediate assistance?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <a
                  href="tel:+17037541911"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Call us: (703) 754-1911
                </a>
                <span className="hidden sm:inline text-neutral-400">|</span>
                <a
                  href="mailto:info@haymarketbicycles.com"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Email: info@haymarketbicycles.com
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
