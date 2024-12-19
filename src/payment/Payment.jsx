import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaWallet, FaUniversity, FaMobileAlt, FaMoneyBillWave } from "react-icons/fa";

const Payment = () => {
    const [selectedMethod, setSelectedMethod] = useState("card");
    const navigate = useNavigate();

    const paymentOptions = [
        { id: "card", label: "Credit/Debit Card", icon: <FaCreditCard className="text-blue-600 mr-2" /> },
        { id: "upi", label: "UPI", icon: <FaMobileAlt className="text-blue-600 mr-2" /> },
        { id: "netbanking", label: "Net Banking", icon: <FaUniversity className="text-blue-600 mr-2" /> },
        { id: "wallet", label: "Wallet", icon: <FaWallet className="text-blue-600 mr-2" /> },
        { id: "cod", label: "Cash on Delivery", icon: <FaMoneyBillWave className="text-blue-600 mr-2" /> },
    ];

    const handlePayment = () => {
        alert(`Payment successful with ${selectedMethod}!`);
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Payment Gateway
            </h1>
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Choose Payment Method
                </h2>
                <div className="space-y-4">
                    {paymentOptions.map((option) => (
                        <label
                            key={option.id}
                            className={`flex items-center border rounded-lg p-4 cursor-pointer transition ${selectedMethod === option.id
                                ? "border-blue-600 bg-blue-100"
                                : "border-gray-300"
                                }`}
                            onClick={() => setSelectedMethod(option.id)}
                        >
                            <input
                                type="radio"
                                name="paymentMethod"
                                value={option.id}
                                checked={selectedMethod === option.id}
                                onChange={() => setSelectedMethod(option.id)}
                                className="hidden"
                            />
                            {option.icon}
                            <span className="text-gray-800">{option.label}</span>
                        </label>
                    ))}
                </div>

                {/* Payment Form */}
                <div className="mt-6">
                    {selectedMethod === "card" && (
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">
                                Enter Card Details
                            </h3>
                            <input
                                type="text"
                                placeholder="Card Number"
                                className="w-full mb-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Cardholder Name"
                                className="w-full mb-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    className="w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="CVV"
                                    className="w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    )}
                    {selectedMethod === "upi" && (
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">
                                Enter UPI ID
                            </h3>
                            <input
                                type="text"
                                placeholder="example@upi"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    )}
                    {selectedMethod === "netbanking" && (
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">
                                Select Bank
                            </h3>
                            <select
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="sbi">State Bank of India</option>
                                <option value="hdfc">HDFC Bank</option>
                                <option value="icici">ICICI Bank</option>
                                <option value="axis">Axis Bank</option>
                            </select>
                        </div>
                    )}
                    {selectedMethod === "wallet" && (
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">
                                Choose Wallet
                            </h3>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 border rounded-lg hover:bg-blue-100">
                                    Paytm
                                </button>
                                <button className="px-4 py-2 border rounded-lg hover:bg-blue-100">
                                    PhonePe
                                </button>
                                <button className="px-4 py-2 border rounded-lg hover:bg-blue-100">
                                    Google Pay
                                </button>
                            </div>
                        </div>
                    )}
                    {selectedMethod === "cod" && (
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">
                                Cash on Delivery
                            </h3>
                            <p className="text-gray-600">Pay in cash upon delivery.</p>
                        </div>
                    )}
                </div>

                <button
                    onClick={handlePayment}
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition"
                >
                    Pay Now
                </button>
            </div>
        </div>
    );
};

export default Payment;
