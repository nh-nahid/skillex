"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function Profile() {
  return (
    <>
      {/* Personal Details */}
      <div className="p-6 mt-8 rounded-2xl shadow-xl shadow-black/30 bg-black/40 backdrop-blur-xl border border-white/10">
        <h5 className="text-lg font-semibold text-white mb-4">Personal Detail</h5>
        <form className="grid gap-6">
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <Label className="mb-2 block text-gray-300">
                First Name <span className="text-red-600">*</span>
              </Label>
              <Input
                type="text"
                placeholder="First Name"
                className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-0"
                required
              />
            </div>
            <div>
              <Label className="mb-2 block text-gray-300">
                Last Name <span className="text-red-600">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Last Name"
                className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-0"
                required
              />
            </div>
            <div>
              <Label className="mb-2 block text-gray-300">
                Your Email <span className="text-red-600">*</span>
              </Label>
              <Input
                type="email"
                placeholder="Email"
                className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-0"
                required
              />
            </div>
            <div>
              <Label className="mb-2 block text-gray-300">Occupation</Label>
              <Input
                type="text"
                placeholder="Occupation"
                className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-0"
              />
            </div>
          </div>

          <div className="mt-5">
            <Label className="mb-2 block text-gray-300">Description</Label>
            <Textarea
              placeholder="Message"
              className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-0"
            />
          </div>

          <Button className="mt-5 w-full bg-gradient-to-r from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/30 hover:scale-105 transition-transform">
            Save Changes
          </Button>
        </form>
      </div>

      {/* Contact Info & Change Password */}
      <div className="p-6 rounded-2xl shadow-xl shadow-black/30 bg-black/40 backdrop-blur-xl border border-white/10 mt-8 grid lg:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-4">Contact Info</h5>
          <form className="grid gap-5">
            <div>
              <Label className="mb-2 block text-gray-300">Phone No.</Label>
              <Input
                type="number"
                placeholder="Phone"
                className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-0"
              />
            </div>
            <div>
              <Label className="mb-2 block text-gray-300">Website</Label>
              <Input
                type="url"
                placeholder="Url"
                className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-0"
              />
            </div>
            <Button className="mt-5 w-full bg-gradient-to-r from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/30 hover:scale-105 transition-transform">
              Add
            </Button>
          </form>
        </div>

        {/* Change Password */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-4">Change Password</h5>
          <form className="grid gap-5">
            <div>
              <Label className="mb-2 block text-gray-300">Old Password</Label>
              <Input
                type="password"
                placeholder="Old password"
                className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-0"
                required
              />
            </div>
            <div>
              <Label className="mb-2 block text-gray-300">New Password</Label>
              <Input
                type="password"
                placeholder="New password"
                className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-0"
                required
              />
            </div>
            <div>
              <Label className="mb-2 block text-gray-300">Re-type New Password</Label>
              <Input
                type="password"
                placeholder="Re-type new password"
                className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-0"
                required
              />
            </div>
            <Button className="mt-5 w-full bg-gradient-to-r from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/30 hover:scale-105 transition-transform">
              Save Password
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;