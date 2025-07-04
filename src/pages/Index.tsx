
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Upload, Calendar, Bell, Share, Download, FileText, Plus, Link, Heart, Activity, Shield } from "lucide-react";
import { HealthChart } from "@/components/HealthChart";
import { VitalsCard } from "@/components/VitalsCard";
import { ReportsSection } from "@/components/ReportsSection";
import { QuickActions } from "@/components/QuickActions";
import { SecurityBadge } from "@/components/SecurityBadge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-25 to-amber-100">
      {/* Header Section */}
      <div className="border-b border-amber-300 bg-gradient-to-r from-amber-100 to-orange-100 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-orange-800 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-amber-900 font-serif">MediVault</h1>
                <p className="text-sm text-amber-700 font-medium">Your health, your hands — securely stored for life</p>
              </div>
            </div>
            <SecurityBadge />
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-orange-800/20 z-10"></div>
        <div 
          className="bg-cover bg-center bg-no-repeat py-20" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
          }}
        >
          <div className="container mx-auto px-6 relative z-20">
            <div className="text-center mb-12 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-amber-200">
              <h2 className="text-5xl font-bold text-amber-900 mb-6 font-serif leading-tight">
                Store, Track & Share — Your Complete Medical Journal, <span className="text-orange-800">Encrypted</span>
              </h2>
              <p className="text-xl text-amber-800 mb-8 max-w-4xl mx-auto leading-relaxed">
                A secure personal health vault that tracks your medical journey — from period logs to prescriptions, 
                vaccination records to lab reports. Built specifically for women's health needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-amber-800 hover:bg-amber-900 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                  <Upload className="w-6 h-6 mr-3" />
                  Upload Health Report
                </Button>
                <Button variant="outline" className="border-2 border-amber-800 text-amber-800 hover:bg-amber-50 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                  <Link className="w-6 h-6 mr-3" />
                  Connect to Doctor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-2xl border-2 border-amber-300 shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-amber-900">12</div>
                <div className="text-amber-700 font-medium">Health Reports</div>
              </div>
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-amber-800" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-2xl border-2 border-orange-300 shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-orange-900">98%</div>
                <div className="text-orange-700 font-medium">Health Score</div>
              </div>
              <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-orange-800" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-6 rounded-2xl border-2 border-amber-300 shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-amber-900">5</div>
                <div className="text-amber-700 font-medium">Doctors Connected</div>
              </div>
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                <Activity className="w-6 h-6 text-amber-800" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-2xl border-2 border-orange-300 shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-orange-900">100%</div>
                <div className="text-orange-700 font-medium">Secure & Private</div>
              </div>
              <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-orange-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Health Overview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Smart Health Highlights */}
            <Card className="border-3 border-amber-300 bg-gradient-to-br from-white to-amber-50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-t-lg">
                <CardTitle className="flex items-center text-amber-900">
                  <Bell className="w-6 h-6 mr-3 text-amber-700" />
                  Smart Health Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="p-5 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl border-2 border-amber-300 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center">
                      <Activity className="w-5 h-5 text-amber-800" />
                    </div>
                    <p className="text-amber-900 font-semibold">Weight increased by 1.4 kg in last 45 days - within healthy range.</p>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl border-2 border-red-300 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center">
                      <Bell className="w-5 h-5 text-red-800" />
                    </div>
                    <p className="text-red-900 font-semibold">Your iron level is below average — iron-rich foods recommended.</p>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border-2 border-green-300 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-green-800" />
                    </div>
                    <p className="text-green-900 font-semibold">Excellent! Your BP readings are consistently normal this month.</p>
                  </div>
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
            
            {/* Enhanced Reminders with Image */}
            <Card className="border-3 border-amber-300 bg-gradient-to-br from-white to-amber-50 shadow-xl overflow-hidden">
              <div 
                className="h-32 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                }}
              >
                <div className="absolute inset-0 bg-amber-900/40"></div>
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-white font-bold text-xl">Health Reminders</h3>
                </div>
              </div>
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl border border-amber-300 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                      💊
                    </div>
                    <span className="text-amber-900 font-medium">Take iron supplement</span>
                  </div>
                  <Badge className="bg-amber-300 text-amber-900 font-semibold">9:00 AM</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl border border-blue-300 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                      📋
                    </div>
                    <span className="text-blue-900 font-medium">Upload blood report</span>
                  </div>
                  <Badge className="bg-blue-300 text-blue-900 font-semibold">Due Jul 15</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border border-purple-300 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                      🩺
                    </div>
                    <span className="text-purple-900 font-medium">Mammogram checkup</span>
                  </div>
                  <Badge className="bg-purple-300 text-purple-900 font-semibold">2 months</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Integration Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-2 border-pink-300 bg-gradient-to-br from-white to-pink-50 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Calendar className="w-8 h-8 text-pink-700" />
              </div>
              <h3 className="font-bold text-lg text-pink-900 mb-3">GynConnect</h3>
              <p className="text-sm text-pink-700 leading-relaxed">Connect with gynecologists and track women's health consultations</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-300 bg-gradient-to-br from-white to-green-50 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Bell className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="font-bold text-lg text-green-900 mb-3">VaxAlert</h3>
              <p className="text-sm text-green-700 leading-relaxed">Sync vaccination records and get timely immunization reminders</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-300 bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Share className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="font-bold text-lg text-blue-900 mb-3">CareCircle</h3>
              <p className="text-sm text-blue-700 leading-relaxed">Share health insights with family members and trusted caregivers</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-amber-300 bg-gradient-to-br from-white to-amber-50 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FileText className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="font-bold text-lg text-amber-900 mb-3">HealthYojana</h3>
              <p className="text-sm text-amber-700 leading-relaxed">Auto-fill health insurance and government scheme eligibility forms</p>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Footer Actions */}
        <div 
          className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl border-3 border-amber-300 shadow-2xl p-10 relative overflow-hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="absolute inset-0 bg-amber-900/20"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-amber-900 mb-4 font-serif">Ready to Take Control of Your Health?</h3>
              <p className="text-lg text-amber-800 max-w-2xl mx-auto">Export your data, sync with healthcare providers, or download comprehensive health summaries.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                <Download className="w-5 h-5 mr-3" />
                Download Health Summary PDF
              </Button>
              <Button variant="outline" className="border-2 border-amber-800 text-amber-800 hover:bg-amber-50 bg-white/90 px-8 py-4 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                <Link className="w-5 h-5 mr-3" />
                Sync with Doctor
              </Button>
              <Button variant="outline" className="border-2 border-amber-800 text-amber-800 hover:bg-amber-50 bg-white/90 px-8 py-4 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                <Download className="w-5 h-5 mr-3" />
                Export to Mobile Wallet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
