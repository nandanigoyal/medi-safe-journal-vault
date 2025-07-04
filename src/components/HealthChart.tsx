
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const weightData = [
  { month: 'Jan', weight: 58 },
  { month: 'Feb', weight: 59 },
  { month: 'Mar', weight: 58.5 },
  { month: 'Apr', weight: 60 },
  { month: 'May', weight: 61.4 },
  { month: 'Jun', weight: 61.4 },
];

const vitalsData = [
  { name: 'BP Systolic', value: 120, normal: 120, color: '#10B981' },
  { name: 'BP Diastolic', value: 80, normal: 80, color: '#10B981' },
  { name: 'Iron Level', value: 8, normal: 12, color: '#EF4444' },
  { name: 'Hemoglobin', value: 11.5, normal: 12, color: '#F59E0B' },
];

export const HealthChart = () => {
  return (
    <Card className="border-2 border-amber-200 bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-gray-900">Health Trends & Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weight Trend Chart */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Weight Progression</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#FEF3C7', 
                    border: '1px solid #D97706',
                    borderRadius: '8px'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="weight" 
                  stroke="#D97706" 
                  strokeWidth={3}
                  dot={{ fill: '#D97706', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Vitals Comparison */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Current vs Normal Levels</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={vitalsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#FEF3C7', 
                    border: '1px solid #D97706',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="value" fill="#D97706" radius={[4, 4, 0, 0]} />
                <Bar dataKey="normal" fill="#E5E7EB" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
