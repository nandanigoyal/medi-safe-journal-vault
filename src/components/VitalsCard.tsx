
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Plus } from "lucide-react";

export const VitalsCard = () => {
  return (
    <Card className="border-2 border-amber-200 bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-gray-900">
          <span>Current Vitals</span>
          <Button size="sm" className="bg-amber-800 hover:bg-amber-900">
            <Plus className="w-4 h-4 mr-1" />
            Update
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* BMI Section */}
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-700">BMI</span>
            <span className="text-xl font-bold text-amber-800">22.4</span>
          </div>
          <Progress value={70} className="h-2" />
          <p className="text-xs text-gray-600 mt-1">Normal range</p>
        </div>

        {/* Weight & Height */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-sm text-gray-600">Weight (kg)</Label>
            <Input value="61.4" className="mt-1" />
          </div>
          <div>
            <Label className="text-sm text-gray-600">Height (cm)</Label>
            <Input value="165" className="mt-1" />
          </div>
        </div>

        {/* Blood Pressure */}
        <div>
          <Label className="text-sm text-gray-600 mb-2 block">Blood Pressure</Label>
          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="120" />
            <Input placeholder="80" />
          </div>
          <p className="text-xs text-green-600 mt-1">✓ Normal range</p>
        </div>

        {/* Recent Lab Values */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-700">Recent Lab Results</h4>
          
          <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
            <div>
              <span className="font-medium text-red-800">Iron Level</span>
              <p className="text-xs text-red-600">8.0 mcg/dL (Low)</p>
            </div>
            <span className="text-red-700 font-bold">⚠️</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <div>
              <span className="font-medium text-yellow-800">Hemoglobin</span>
              <p className="text-xs text-yellow-600">11.5 g/dL (Low Normal)</p>
            </div>
            <span className="text-yellow-700 font-bold">⚡</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
            <div>
              <span className="font-medium text-green-800">Vitamin D</span>
              <p className="text-xs text-green-600">32 ng/mL (Normal)</p>
            </div>
            <span className="text-green-700 font-bold">✓</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
