import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BarChart3, PiggyBank, TrendingUp } from "lucide-react";

function Specs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="grid grid-cols-3 gap-8"
    >
      <Card className="bg-[#0f1120] border border-gray-800">
        <CardHeader>
          <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
            <BarChart3 className="w-6 h-6 text-blue-500" />
          </div>
          <CardTitle className="text-white">Detailed Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Visualize the evolution of your finances with interactive charts and
            relevant analytics
          </p>
        </CardContent>
      </Card>

      <Card className="bg-[#0f1120] border border-gray-800">
        <CardHeader>
          <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
            <PiggyBank className="w-6 h-6 text-green-500" />
          </div>
          <CardTitle className="text-white">Saving management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            {" "}
            Track your savings goals and optimize your assets with personalized
            recommendations.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-[#0f1120] border border-gray-800">
        <CardHeader>
          <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-purple-500" />
          </div>
          <CardTitle className="text-white">Transaction Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            {" "}
            Keep an eye on all your transactions and identify spending trends in
            real-time.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default Specs;
