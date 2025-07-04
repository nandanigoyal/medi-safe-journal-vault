
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Upload, Calendar, Bell, Share, Download, FileText, Plus, Link } from "lucide-react";
import { HealthChart } from "@/components/HealthChart";
import { VitalsCard } from "@/components/VitalsCard";
import { ReportsSection } from "@/components/ReportsSection";
import { QuickActions } from "@/components/QuickActions";
import { SecurityBadge } from "@/components/SecurityBadge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-25">
      {/* Header Section */}
      <div className="border-b border-amber-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">MediVault</h1>
                <p className="text-sm text-gray-600">Your health, your hands — securely stored for life</p>
              </div>
            </div>
            <SecurityBadge />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
            Store, Track & Share — Your Complete Medical Journal, Encrypted
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            A secure personal health vault that tracks your medical journey — from period logs to prescriptions, 
            vaccination records to lab reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-xl font-medium">
              <Upload className="w-5 h-5 mr-2" />
              Upload Health Report
            </Button>
            <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50 px-8 py-3 rounded-xl font-medium">
              <Link className="w-5 h-5 mr-2" />
              Connect to Doctor
            </Button>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Health Overview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Smart Health Highlights */}
            <Card className="border-2 border-amber-200 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <Bell className="w-5 h-5 mr-2 text-amber-600" />
                  Smart Health Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-amber-800 font-medium">Weight increased by 1.4 kg in last 45 days.</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-red-800 font-medium">Your iron level is below average — view recommendations.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-green-800 font-medium">Great job! You've maintained consistent BP readings this month.</p>
                </div>
              </CardContent>
            </Card>

            {/* Health Chart */}
            <HealthChart />

            {/* Recent Reports */}
            <ReportsSection />
          </div>

          {/* Right Column - Vitals & Actions */}
          <div className="space-y-6">
            <VitalsCard />
            <QuickActions />
            
            {/* Reminders */}
            <Card className="border-2 border-amber-200 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <Calendar className="w-5 h-5 mr-2 text-amber-600" />
                  Health Reminders
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                  <span className="text-sm text-gray-700">Take iron supplement</span>
                  <Badge className="bg-amber-200 text-amber-800">9:00 AM</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm text-gray-700">Upload blood report</span>
                  <Badge className="bg-blue-200 text-blue-800">Due Jul 15</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-sm text-gray-700">Mammogram checkup</span>
                  <Badge className="bg-purple-200 text-purple-800">2 months</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Integration Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border border-amber-200 bg-white hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">GynConnect</h3>
              <p className="text-sm text-gray-600">Link with gynecologist consultations</p>
            </CardContent>
          </Card>

          <Card className="border border-amber-200 bg-white hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">VaxAlert</h3>
              <p className="text-sm text-gray-600">Sync vaccination records</p>
            </CardContent>
          </Card>

          <Card className="border border-amber-200 bg-white hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">CareCircle</h3>
              <p className="text-sm text-gray-600">Share insights with family</p>
            </CardContent>
          </Card>

          <Card className="border border-amber-200 bg-white hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">HealthYojana</h3>
              <p className="text-sm text-gray-600">Auto-fill eligibility forms</p>
            </CardContent>
          </Card>
        </div>

        {/* Footer Actions */}
        <div className="bg-white rounded-2xl border-2 border-amber-200 shadow-lg p-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              <Download className="w-5 h-5 mr-2" />
              Download Health Summary PDF
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              <Link className="w-5 h-5 mr-2" />
              Sync with Doctor
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              <Download className="w-5 h-5 mr-2" />
              Export to Mobile Wallet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
