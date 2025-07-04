
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Upload, Calendar, Bell, Share, Download, FileText, Plus, Link, Heart, Activity, Shield, Calculator, Stethoscope, Pill, Scan } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [bp, setBp] = useState({ systolic: "", diastolic: "" });
  const [sugar, setSugar] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = parseFloat(height) / 100;
      const calculatedBMI = parseFloat(weight) / (heightInMeters * heightInMeters);
      setBmi(parseFloat(calculatedBMI.toFixed(1)));
      
      if (calculatedBMI < 18.5) setBmiCategory("Underweight - Consider increasing caloric intake");
      else if (calculatedBMI >= 18.5 && calculatedBMI < 25) setBmiCategory("Normal weight - Excellent! Keep maintaining");
      else if (calculatedBMI >= 25 && calculatedBMI < 30) setBmiCategory("Overweight - Consider diet and exercise");
      else setBmiCategory("Obese - Consult healthcare provider");
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUploadReport = () => {
    scrollToSection('upload-section');
  };

  const handleBMICalculator = () => {
    scrollToSection('bmi-section');
  };

  const handlePrescriptions = () => {
    scrollToSection('prescriptions-section');
  };

  const handleHealthRecords = () => {
    scrollToSection('records-section');
  };

  const handleScans = () => {
    scrollToSection('scans-section');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-25 to-stone-100">
      {/* Header Section */}
      <div className="border-b border-stone-300 bg-gradient-to-r from-stone-100 to-amber-100 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-800 to-stone-800 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-stone-900 font-serif">MediVault</h1>
                <p className="text-sm text-stone-700 font-medium">Your health, your hands — securely stored for life</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full border border-green-300">
              <Shield className="w-5 h-5 text-green-700" />
              <span className="text-green-800 font-semibold text-sm">256-bit Encrypted</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/20 to-amber-800/20 z-10"></div>
        <div 
          className="bg-cover bg-center bg-no-repeat py-20" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
          }}
        >
          <div className="container mx-auto px-6 relative z-20">
            <div className="text-center mb-12 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-stone-200">
              <h2 className="text-5xl font-bold text-stone-900 mb-6 font-serif leading-tight">
                Complete Medical Records Management System
              </h2>
              <p className="text-xl text-stone-800 mb-8 max-w-4xl mx-auto leading-relaxed">
                Store, organize and manage all your health records, prescriptions, lab reports, and medical history in one secure digital vault.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-center">
                <Button 
                  onClick={handleUploadReport}
                  className="bg-gradient-to-r from-amber-800 to-stone-800 hover:from-amber-900 hover:to-stone-900 text-white px-6 py-4 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Reports
                </Button>
                <Button 
                  onClick={handleBMICalculator}
                  className="bg-gradient-to-r from-stone-800 to-amber-800 hover:from-stone-900 hover:to-amber-900 text-white px-6 py-4 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  BMI Calculator
                </Button>
                <Button 
                  onClick={handlePrescriptions}
                  className="bg-gradient-to-r from-amber-800 to-stone-800 hover:from-amber-900 hover:to-stone-900 text-white px-6 py-4 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Pill className="w-5 h-5 mr-2" />
                  Prescriptions
                </Button>
                <Button 
                  onClick={handleHealthRecords}
                  className="bg-gradient-to-r from-stone-800 to-amber-800 hover:from-stone-900 hover:to-amber-900 text-white px-6 py-4 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Stethoscope className="w-5 h-5 mr-2" />
                  Health Records
                </Button>
                <Button 
                  onClick={handleScans}
                  className="bg-gradient-to-r from-amber-800 to-stone-800 hover:from-amber-900 hover:to-stone-900 text-white px-6 py-4 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Scan className="w-5 h-5 mr-2" />
                  Scans & Reports
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Upload Section */}
        <section id="upload-section" className="mb-16">
          <Card className="border-3 border-stone-300 bg-gradient-to-br from-white to-stone-50 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-stone-100 to-amber-100 rounded-t-lg">
              <CardTitle className="text-stone-900 text-2xl font-bold flex items-center">
                <Upload className="w-7 h-7 mr-3 text-amber-800" />
                Upload Medical Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div 
                className="border-3 border-dashed border-amber-400 rounded-2xl p-12 mb-8 bg-gradient-to-br from-amber-50 to-stone-50 hover:from-amber-100 hover:to-stone-100 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{
                  backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="upload-pattern" patternUnits="userSpaceOnUse" width="20" height="20"><circle cx="10" cy="10" r="1" fill="%23d97706" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23upload-pattern)"/></svg>')`,
                }}
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-200 to-stone-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Upload className="w-12 h-12 text-amber-800" />
                  </div>
                  <h3 className="text-3xl font-bold text-stone-900 mb-4">Drop your medical files here</h3>
                  <p className="text-stone-800 mb-6 font-medium text-lg">Support for PDF, JPG, PNG, DICOM files up to 25MB</p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Badge className="bg-amber-200 text-amber-900 font-semibold border-2 border-amber-400 px-6 py-3 text-lg">
                      <FileText className="w-5 h-5 mr-2" />
                      Lab Reports
                    </Badge>
                    <Badge className="bg-stone-200 text-stone-900 font-semibold border-2 border-stone-400 px-6 py-3 text-lg">
                      <Pill className="w-5 h-5 mr-2" />
                      Prescriptions
                    </Badge>
                    <Badge className="bg-amber-200 text-amber-900 font-semibold border-2 border-amber-400 px-6 py-3 text-lg">
                      <Scan className="w-5 h-5 mr-2" />
                      X-rays & Scans
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* BMI Calculator Section */}
        <section id="bmi-section" className="mb-16">
          <Card className="border-3 border-stone-300 bg-gradient-to-br from-white to-stone-50 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-stone-100 to-amber-100 rounded-t-lg">
              <CardTitle className="text-stone-900 text-2xl font-bold flex items-center">
                <Calculator className="w-7 h-7 mr-3 text-amber-800" />
                Health Metrics Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-stone-800 font-semibold mb-2 block">Weight (kg)</Label>
                      <Input 
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Enter weight"
                        className="border-stone-300 focus:border-amber-500 bg-white text-lg p-3"
                      />
                    </div>
                    <div>
                      <Label className="text-stone-800 font-semibold mb-2 block">Height (cm)</Label>
                      <Input 
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Enter height"
                        className="border-stone-300 focus:border-amber-500 bg-white text-lg p-3"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    onClick={calculateBMI}
                    className="w-full bg-gradient-to-r from-amber-800 to-stone-800 hover:from-amber-900 hover:to-stone-900 text-white py-4 text-lg font-semibold shadow-lg"
                  >
                    Calculate BMI
                  </Button>

                  {bmi && (
                    <div className="p-6 bg-gradient-to-br from-amber-100 to-stone-100 rounded-xl border-2 border-amber-300 shadow-lg">
                      <div className="text-center mb-4">
                        <div className="text-4xl font-bold text-stone-900 mb-2">{bmi}</div>
                        <div className="text-lg text-stone-700 font-semibold">{bmiCategory}</div>
                      </div>
                      <Progress value={Math.min((bmi / 35) * 100, 100)} className="h-4" />
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-stone-800 font-semibold mb-2 block">Blood Pressure</Label>
                      <div className="flex gap-2">
                        <Input 
                          value={bp.systolic}
                          onChange={(e) => setBp({...bp, systolic: e.target.value})}
                          placeholder="120"
                          className="border-stone-300 focus:border-amber-500 bg-white"
                        />
                        <Input 
                          value={bp.diastolic}
                          onChange={(e) => setBp({...bp, diastolic: e.target.value})}
                          placeholder="80"
                          className="border-stone-300 focus:border-amber-500 bg-white"
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-stone-800 font-semibold mb-2 block">Blood Sugar (mg/dL)</Label>
                      <Input 
                        value={sugar}
                        onChange={(e) => setSugar(e.target.value)}
                        placeholder="90-100"
                        className="border-stone-300 focus:border-amber-500 bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div 
                    className="h-64 bg-cover bg-center rounded-2xl border-2 border-stone-300 shadow-lg"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                    }}
                  >
                    <div className="h-full bg-gradient-to-t from-stone-900/60 to-transparent rounded-2xl flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold">Health Monitoring</h3>
                        <p className="text-stone-200">Track your vitals regularly</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl border-2 border-green-300">
                      <div className="text-2xl font-bold text-green-900">Normal</div>
                      <div className="text-sm text-green-700">BMI Range</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl border-2 border-blue-300">
                      <div className="text-2xl font-bold text-blue-900">Optimal</div>
                      <div className="text-sm text-blue-700">BP Reading</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Prescriptions Section */}
        <section id="prescriptions-section" className="mb-16">
          <Card className="border-3 border-stone-300 bg-gradient-to-br from-white to-stone-50 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-stone-100 to-amber-100 rounded-t-lg">
              <CardTitle className="text-stone-900 text-2xl font-bold flex items-center">
                <Pill className="w-7 h-7 mr-3 text-amber-800" />
                Prescription Management
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-4">Recent Prescriptions</h3>
                  
                  {/* Example Prescription */}
                  <div className="bg-gradient-to-r from-white to-stone-50 border-2 border-stone-200 rounded-2xl p-6 mb-4 shadow-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-stone-900 text-lg">Dr. Sarah Johnson</h4>
                        <p className="text-stone-600">Internal Medicine</p>
                        <p className="text-sm text-stone-500">June 15, 2024</p>
                      </div>
                      <Badge className="bg-green-200 text-green-900 border-green-400">Active</Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <div>
                          <div className="font-semibold text-stone-900">Iron Supplement</div>
                          <div className="text-sm text-stone-600">325mg - Take once daily with food</div>
                        </div>
                        <div className="text-sm text-amber-800 font-semibold">30 days</div>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div>
                          <div className="font-semibold text-stone-900">Vitamin D3</div>
                          <div className="text-sm text-stone-600">2000 IU - Take once daily</div>
                        </div>
                        <div className="text-sm text-blue-800 font-semibold">60 days</div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-amber-800 to-stone-800 hover:from-amber-900 hover:to-stone-900 text-white py-3 font-semibold">
                    <Plus className="w-5 h-5 mr-2" />
                    Add New Prescription
                  </Button>
                </div>

                <div>
                  <div 
                    className="h-96 bg-cover bg-center rounded-2xl border-2 border-stone-300 shadow-lg mb-4"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                    }}
                  >
                    <div className="h-full bg-gradient-to-t from-stone-900/70 to-transparent rounded-2xl flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-2">Medication Tracking</h3>
                        <p className="text-stone-200">Never miss a dose with smart reminders</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl border-2 border-amber-300">
                      <div className="text-2xl font-bold text-amber-900">12</div>
                      <div className="text-xs text-amber-700">Active Meds</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl border-2 border-green-300">
                      <div className="text-2xl font-bold text-green-900">98%</div>
                      <div className="text-xs text-green-700">Compliance</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl border-2 border-blue-300">
                      <div className="text-2xl font-bold text-blue-900">5</div>
                      <div className="text-xs text-blue-700">Reminders</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Health Records Section */}
        <section id="records-section" className="mb-16">
          <Card className="border-3 border-stone-300 bg-gradient-to-br from-white to-stone-50 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-stone-100 to-amber-100 rounded-t-lg">
              <CardTitle className="text-stone-900 text-2xl font-bold flex items-center">
                <Stethoscope className="w-7 h-7 mr-3 text-amber-800" />
                Health Records & Consultations
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-xl font-bold text-stone-900">Recent Consultations</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-white to-stone-50 border-2 border-stone-200 rounded-2xl p-6 shadow-lg">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-300">
                          <img 
                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                            alt="Dr. Sarah Johnson"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-stone-900 text-lg">Dr. Sarah Johnson</h4>
                          <p className="text-stone-600 mb-2">Internal Medicine Specialist</p>
                          <p className="text-sm text-stone-500 mb-3">Last visited: June 15, 2024</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-amber-200 text-amber-900 border-amber-400">Iron Deficiency</Badge>
                            <Badge className="bg-blue-200 text-blue-900 border-blue-400">Follow-up Required</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-white to-stone-50 border-2 border-stone-200 rounded-2xl p-6 shadow-lg">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-300">
                          <img 
                            src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                            alt="Dr. Maria Rodriguez"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-stone-900 text-lg">Dr. Maria Rodriguez</h4>
                          <p className="text-stone-600 mb-2">Cardiologist</p>
                          <p className="text-sm text-stone-500 mb-3">Last visited: May 28, 2024</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-green-200 text-green-900 border-green-400">Normal BP</Badge>
                            <Badge className="bg-purple-200 text-purple-900 border-purple-400">Annual Check-up</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div 
                    className="h-64 bg-cover bg-center rounded-2xl border-2 border-stone-300 shadow-lg mb-6"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                    }}
                  >
                    <div className="h-full bg-gradient-to-t from-stone-900/70 to-transparent rounded-2xl flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold">Healthcare Network</h3>
                        <p className="text-stone-200">Connected specialists</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-center p-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl border-2 border-amber-300">
                      <div className="text-3xl font-bold text-amber-900">8</div>
                      <div className="text-sm text-amber-700 font-semibold">Connected Doctors</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl border-2 border-green-300">
                      <div className="text-3xl font-bold text-green-900">24</div>
                      <div className="text-sm text-green-700 font-semibold">Total Consultations</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Scans & Reports Section */}
        <section id="scans-section" className="mb-16">
          <Card className="border-3 border-stone-300 bg-gradient-to-br from-white to-stone-50 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-stone-100 to-amber-100 rounded-t-lg">
              <CardTitle className="text-stone-900 text-2xl font-bold flex items-center">
                <Scan className="w-7 h-7 mr-3 text-amber-800" />
                Medical Scans & Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900">Recent Scans</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-white to-stone-50 border-2 border-stone-200 rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center border-2 border-blue-300">
                          <Scan className="w-10 h-10 text-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-bold text-stone-900 text-lg">Chest X-Ray</h4>
                          <p className="text-stone-600">June 10, 2024</p>
                          <Badge className="bg-green-200 text-green-900 border-green-400 mt-1">Normal</Badge>
                        </div>
                      </div>
                      <p className="text-sm text-stone-700">Routine chest examination shows clear lung fields with no abnormalities detected.</p>
                    </div>

                    <div className="bg-gradient-to-r from-white to-stone-50 border-2 border-stone-200 rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center border-2 border-purple-300">
                          <Heart className="w-10 h-10 text-purple-700" />
                        </div>
                        <div>
                          <h4 className="font-bold text-stone-900 text-lg">ECG Report</h4>
                          <p className="text-stone-600">May 25, 2024</p>
                          <Badge className="bg-green-200 text-green-900 border-green-400 mt-1">Normal Rhythm</Badge>
                        </div>
                      </div>
                      <p className="text-sm text-stone-700">Electrocardiogram shows normal sinus rhythm with no signs of arrhythmia.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div 
                    className="h-80 bg-cover bg-center rounded-2xl border-2 border-stone-300 shadow-lg mb-6"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                    }}
                  >
                    <div className="h-full bg-gradient-to-t from-stone-900/70 to-transparent rounded-2xl flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-2">Digital Imaging</h3>
                        <p className="text-stone-200">Advanced medical imaging and diagnostics</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl border-2 border-blue-300">
                      <div className="text-2xl font-bold text-blue-900">15</div>
                      <div className="text-sm text-blue-700 font-semibold">Total Scans</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl border-2 border-green-300">
                      <div className="text-2xl font-bold text-green-900">100%</div>
                      <div className="text-sm text-green-700 font-semibold">Digital Storage</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer CTA */}
        <div 
          className="bg-gradient-to-r from-stone-100 to-amber-100 rounded-3xl border-3 border-stone-300 shadow-2xl p-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="bg-white/95 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-stone-900 mb-4 font-serif">Take Control of Your Health Journey</h3>
            <p className="text-lg text-stone-800 max-w-2xl mx-auto mb-6">
              Join thousands who trust MediVault for secure, comprehensive health record management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-amber-800 to-stone-800 hover:from-amber-900 hover:to-stone-900 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                <Download className="w-5 h-5 mr-3" />
                Download Health Summary
              </Button>
              <Button className="bg-gradient-to-r from-stone-800 to-amber-800 hover:from-stone-900 hover:to-amber-900 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                <Share className="w-5 h-5 mr-3" />
                Share with Doctor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
