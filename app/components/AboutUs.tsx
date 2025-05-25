import React from "react";
import { Card, CardTitle, CardDescription, CardFooter } from "./ui/AboutUsCard";
import Image from "next/image";

const AboutUs = () => {
    return (
        <div className="py-20 w-full" id="about">
            <h1 className="heading">
                About <span className="text-purple">Us</span>
            </h1>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
                <Card>
                    <Image src="/PREDICTIVEOPS-Static-Web/HansiMiss.jpeg" alt="Team Member" width="500" height="200" />
                    <div className="p-4">
                        <CardTitle>Miss. Handi De Silva</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Software Engineering
                        </CardDescription>
                        <CardFooter>
                            <a href="https://www.linkedin.com/in/hansi-de-silva-03629b79/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="mailto:hansi.d@sliit.lk">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
                <Card>

                    <Image src="/PREDICTIVEOPS-Static-Web/MahimaSir.jpeg" alt="Team Member" width="500" height="200" />
                    <div className="p-4">
                        <CardTitle>Dr. Mahima Weerasinghe</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Software Engineering
                        </CardDescription>
                        <CardFooter>
                            <a href="https://www.linkedin.com/in/mahimaweerasinghe/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="mailto:mahima.w@sliit.lk">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
                <Card>
                    <Image src="/PREDICTIVEOPS-Static-Web/Isuri.jpeg" alt="Team Member" width="500" height="200" />
                    <div className="p-4">
                        <CardTitle>Yapa Y.A.I.D</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Software Engineering
                        </CardDescription>
                        <CardFooter>
                            <a href="https://www.linkedin.com/in/isuri-yapa-427571215/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="mailto:it21214134@my.sliit.lk">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
                <Card>
                    <Image src="/PREDICTIVEOPS-Static-Web/Janani.jpg" alt="Team Member" width="500" height="200" />
                    <div className="p-4">
                        <CardTitle>Gunawardana A.P.J.K.V</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Software Engineering
                        </CardDescription>
                        <CardFooter>
                            <a href="https://www.linkedin.com/in/janani-vas/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="mailto:it21212604@my.sliit.lk">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
                <Card>
                    <Image src="/PREDICTIVEOPS-Static-Web/Hashan.jpg" alt="Team Member" width="500" height="200" />
                    <div className="p-4">
                        <CardTitle>Madhuwantha U.N.H</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Information Technology
                        </CardDescription>
                        <CardFooter>
                            <a href="https://www.linkedin.com/in/hashan-madhuwantha/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="mailto:it21168390@my.sliit.lk">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
                <Card>
                    <Image src="/PREDICTIVEOPS-Static-Web/Saranga.jpg" alt="Team Member" width="500" height="200" />
                    <div className="p-4">
                        <CardTitle>Saranga G.K.G</CardTitle>
                        <CardDescription>
                            Sri Lanka Institute of Information Technology <br />
                            <strong>Department:</strong> Software Engineering
                        </CardDescription>
                        <CardFooter>
                            <a href="https://www.linkedin.com/in/saranga-gunasekara" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="mailto:it21168222@my.sliit.lk">E-Mail</a>
                        </CardFooter>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default AboutUs;
