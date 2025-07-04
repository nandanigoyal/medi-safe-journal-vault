
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Share, Download, Calendar, Bell, Plus } from "lucide-react";

export const QuickActions = () => {
  return (
    <Card className="border-2 border-amber-200 bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-gray-900 text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button className="w-full justify-start bg-amber-800 hover:bg-amber-900 text-white">
          <Upload className="w-4 h-4 mr-3" />
          Upload Report
        </Button>
        
        <Button variant="outline" className="w-full justify-start border-amber-200 hover:bg-amber-50">
          <Plus className="w-4 h-4 mr-3" />
          Log Vitals
        </Button>
        
        <Button variant="outline" className="w-full justify-start border-amber-200 hover:bg-amber-50">
          <Calendar className="w-4 h-4 mr-3" />
          Book Checkup
        </Button>
        
        <Button variant="outline" className="w-full justify-start border-amber-200 hover:bg-amber-50">
          <Share className="w-4 h-4 mr-3" />
          Share with Doctor
        </Button>
        
        <Button variant="outline" className="w-full justify-start border-amber-200 hover:bg-amber-50">
          <Download className="w-4 h-4 mr-3" />
          Export Data
        </Button>
        
        <Button variant="outline" className="w-full justify-start border-amber-200 hover:bg-amber-50">
          <Bell className="w-4 h-4 mr-3" />
          Set Reminder
        </Button>
        
        {/* AI Assistant */}
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold">AI</span>
            </div>
            <div>
              <h4 className="font-semibold text-purple-900 mb-1">Health Assistant</h4>
              <p className="text-sm text-purple-700 mb-3">
                "Based on your recent reports, I recommend scheduling an iron deficiency follow-up."
              </p>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                View Recommendations
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
