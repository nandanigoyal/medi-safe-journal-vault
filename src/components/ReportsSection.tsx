
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Upload, Calendar, Share } from "lucide-react";

const reports = [
  {
    id: 1,
    name: "Blood Work - Complete Panel",
    date: "2024-06-15",
    doctor: "Dr. Sarah Johnson",
    type: "Lab Report",
    status: "reviewed",
    category: "General"
  },
  {
    id: 2,
    name: "Gynecological Checkup",
    date: "2024-06-01",
    doctor: "Dr. Nandini Sharma",
    type: "Consultation",
    status: "new",
    category: "Gynae"
  },
  {
    id: 3,
    name: "Iron Deficiency Prescription",
    date: "2024-05-28",
    doctor: "Dr. Sarah Johnson",
    type: "Prescription",
    status: "active",
    category: "General"
  },
  {
    id: 4,
    name: "Mammography Report",
    date: "2024-05-15",
    doctor: "Dr. Lisa Chen",
    type: "Scan",
    status: "reviewed",
    category: "Scans"
  }
];

const getCategoryColor = (category: string) => {
  const colors = {
    'General': 'bg-blue-100 text-blue-800',
    'Gynae': 'bg-pink-100 text-pink-800',
    'Scans': 'bg-purple-100 text-purple-800',
    'Mental Health': 'bg-green-100 text-green-800'
  };
  return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

const getStatusColor = (status: string) => {
  const colors = {
    'new': 'bg-green-100 text-green-800',
    'reviewed': 'bg-gray-100 text-gray-800',
    'active': 'bg-amber-100 text-amber-800'
  };
  return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

export const ReportsSection = () => {
  return (
    <Card className="border-2 border-amber-200 bg-white shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-gray-900">Health Records & Reports</CardTitle>
          <Button className="bg-amber-800 hover:bg-amber-900">
            <Upload className="w-4 h-4 mr-2" />
            Upload New
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Upload Zone */}
        <div className="border-2 border-dashed border-amber-300 rounded-lg p-8 mb-6 bg-amber-50 hover:bg-amber-100 transition-colors cursor-pointer">
          <div className="text-center">
            <Upload className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Drop files here or click to upload</h3>
            <p className="text-gray-600 mb-4">Support for PDF, JPG, PNG, DICOM files</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="border-amber-300 text-amber-700">Prescriptions</Badge>
              <Badge variant="outline" className="border-amber-300 text-amber-700">Lab Reports</Badge>
              <Badge variant="outline" className="border-amber-300 text-amber-700">Scans</Badge>
              <Badge variant="outline" className="border-amber-300 text-amber-700">Vaccination</Badge>
            </div>
          </div>
        </div>

        {/* Reports List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Recent Reports</h3>
            <div className="flex gap-2">
              <Badge className="bg-amber-200 text-amber-800">All (12)</Badge>
              <Badge variant="outline">Gynae (3)</Badge>
              <Badge variant="outline">General (6)</Badge>
              <Badge variant="outline">Scans (3)</Badge>
            </div>
          </div>

          {reports.map((report) => (
            <div key={report.id} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{report.name}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {report.date}
                    </span>
                    <span>{report.doctor}</span>
                    <span>•</span>
                    <span>{report.type}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className={getCategoryColor(report.category)}>
                  {report.category}
                </Badge>
                <Badge className={getStatusColor(report.status)}>
                  {report.status}
                </Badge>
                <Button size="sm" variant="ghost">
                  <Share className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-2xl font-bold text-blue-800">12</div>
            <div className="text-sm text-blue-600">Total Reports</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="text-2xl font-bold text-green-800">3</div>
            <div className="text-sm text-green-600">This Month</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-2xl font-bold text-purple-800">2</div>
            <div className="text-sm text-purple-600">Shared</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
