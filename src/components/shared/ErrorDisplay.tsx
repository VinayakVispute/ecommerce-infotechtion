import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorDisplayProps {
  message: string;
  onRetry: () => void;
}

export function ErrorDisplay({ message, onRetry }: ErrorDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-red-50 rounded-lg">
      <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
      <h2 className="text-xl font-semibold text-red-700 mb-2">
        Oops! Something went wrong
      </h2>
      <p className="text-red-600 mb-4 text-center">{message}</p>
      <Button
        onClick={onRetry}
        variant="outline"
        className="bg-white hover:bg-red-50"
      >
        Try Again
      </Button>
    </div>
  );
}
