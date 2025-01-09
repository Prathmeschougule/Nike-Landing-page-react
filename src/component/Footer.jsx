import React from 'react';

function Footer() {
    return (
        <footer class=" mt-20 text-center text-lg-start bg-gray-100 text-gray-600">
            <section class="flex justify-center lg:justify-between items-center p-4 border-b border-gray-300">
            
                <div class="flex space-x-4">
                    <a href="#" class="text-gray-600 hover:text-gray-800">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-gray-800">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-gray-800">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-gray-800">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-gray-800">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-gray-800">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </section>
            <section class="mt-8">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h6 class="uppercase font-bold mb-4 flex items-start">
                                <i class="fas fa-gem mr-3"></i>Company Name
                            </h6>
                            <p className='text-start'>
                                Here you can use rows and columns to organize your footer content.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div >
                            <h6 class="uppercase font-bold mb-4">Products</h6>
                            <p>
                                <a  href="#!" class="text-gray-600 hover:text-gray-800">Angular</a>
                            </p>
                            <p>
                                <a href="#!" class="text-gray-600 hover:text-gray-800">React</a>
                            </p>
                            <p>
                                <a href="#!" class="text-gray-600 hover:text-gray-800">Vue</a>
                            </p>
                            <p>
                                <a href="#!" class="text-gray-600 hover:text-gray-800">Laravel</a>
                            </p>
                        </div>
                        <div>
                            <h6 class="uppercase font-bold mb-4">Useful Links</h6>
                            <p>
                                <a href="#!" class="text-gray-600 hover:text-gray-800">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" class="text-gray-600 hover:text-gray-800">Settings</a>
                            </p>
                            <p>
                                <a href="#!" class="text-gray-600 hover:text-gray-800">Orders</a>
                            </p>
                            <p>
                                <a href="#!" class="text-gray-600 hover:text-gray-800">Help</a>
                            </p>
                        </div>
                        <div>
                            <h6 class="uppercase font-bold mb-4">Contact</h6>
                            <p class="flex items-center">
                                <i class="fas fa-home mr-3"></i> New York, NY 10012, US
                            </p>
                            <p class="flex items-center">
                                <i class="fas fa-envelope mr-3"></i> info@example.com
                            </p>
                            <p class="flex items-center">
                                <i class="fas fa-phone mr-3"></i> + 01 234 567 88
                            </p>
                            <p class="flex items-center">
                                <i class="fas fa-print mr-3"></i> + 01 234 567 89
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div class="text-center p-4 bg-gray-200">
                © 2021 Copyright:
                <a href="https://mdbootstrap.com/" class="text-gray-800 font-bold">MDBootstrap.com</a>
            </div>
        </footer>
    );
}

export default Footer;








