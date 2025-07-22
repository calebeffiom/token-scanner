import { Card, CardContent } from "components/ui/card";

export default function TokenSkeleton() {
    return (
      <Card className="bg-gray-300 dark:bg-gray-600 mt-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-muted animate-pulse" />
            <div className="w-16 h-5 bg-muted rounded animate-pulse" />
          </div>
  
          <div className="space-y-3">
            <div>
              <div className="w-16 h-6 bg-muted rounded animate-pulse mb-1" />
              <div className="w-24 h-4 bg-muted rounded animate-pulse" />
            </div>
  
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="w-12 h-4 bg-muted rounded animate-pulse" />
                <div className="w-20 h-4 bg-muted rounded animate-pulse" />
              </div>
              
              <div className="flex justify-between items-center">
                <div className="w-16 h-4 bg-muted rounded animate-pulse" />
                <div className="w-14 h-4 bg-muted rounded animate-pulse" />
              </div>
  
              <div className="flex justify-between items-center">
                <div className="w-20 h-4 bg-muted rounded animate-pulse" />
                <div className="w-16 h-4 bg-muted rounded animate-pulse" />
              </div>
            </div>
  
            <div className="pt-3 border-t">
              <div className="w-full h-8 bg-muted rounded animate-pulse" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }