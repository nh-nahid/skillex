import { User } from "@/model/user-model";
import { dbConnect } from "@/service/mongo";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { firstName, lastName, email, password, userRole } = await request.json();
  console.log(firstName, lastName, email, password, userRole);

  await dbConnect();

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("User with this email already exists", { status: 409 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: userRole
    };

    console.log(newUser);

    // Create the new user
    await User.create(newUser);
    return new NextResponse("User has been created successfully", { status: 201 });

  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};