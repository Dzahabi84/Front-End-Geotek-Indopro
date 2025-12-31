"use client";
import { useState, useRef, useEffect, ChangeEvent } from "react";
import FooterTop from '@/components/factory-homepage/FooterTop';

import InnerPageHeader from '@/components/header/InnerPageHeader';
import Link from 'next/link';
import Footer1 from "@/components/footers/Footer1";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";




interface CartItem {
    id: number;
    name: string;
    sku: string;
    img: string;
    price: number;
    quantity: number;
}

const CartPage = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 1,
            name: "Crystal-Infused",
            sku: "D32-5H23",
            img: "/assets/img/innerpages/cart-img1.jpg",
            price: 148.0,
            quantity: 1,
        },
        {
            id: 2,
            name: "Corrosion Resistant",
            sku: "D32-5H23",
            img: "/assets/img/innerpages/cart-img2.jpg",
            price: 200.0,
            quantity: 1,
        },
    ]);

    const tableRef = useRef<HTMLTableSectionElement | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (tableRef.current && !tableRef.current.contains(event.target as Node)) {
            setActiveIndex(null);
        }
    };

    const handleIncrement = (index: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrement = (index: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item, i) =>
                i === index
                    ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                    : item
            )
        );
    };

    const handleQuantityChange = (index: number, value: string) => {
        const parsed = parseInt(value, 10);
        if (!isNaN(parsed) && parsed > 0) {
            setCartItems((prevItems) =>
                prevItems.map((item, i) =>
                    i === index ? { ...item, quantity: parsed } : item
                )
            );
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const pickupFee = 10; // fixed fee
    const total = subTotal + pickupFee;

    return (
        <>
          
            <InnerPageHeader />
             <Breadcrumb title="Cart" subtitle="Market Trend &amp; Analyst Behind The Scene of Industry." />
            {/* Cart Table */}
            <div className="cart-page pt-120 mb-120" id="scroll-section">
                <div className="container">
                    <div className="row g-lg-4 gy-5">
                        <div className="col-xl-8 col-lg-7">
                            <div className="cart-shopping-wrapper">
                                <div className="cart-widget-title">
                                    <h4>My Shopping</h4>
                                </div>
                                <table className="cart-table">
                                    <thead>
                                        <tr>
                                            <th>Product Info</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody ref={tableRef}>
                                        {cartItems.map((product, index) => (
                                            <tr key={product.id}>
                                                <td data-label="Product Info">
                                                    <div className="product-info-wrapper">
                                                        <div className="product-info-img">
                                                            <Image width={120} height={120} src={product.img} alt={product.name} />
                                                        </div>
                                                        <div className="product-info-content">
                                                            <h6>{product.name}</h6>
                                                            <p><span>SKU: </span>{product.sku}</p>
                                                            <ul>
                                                                <li>remove</li>
                                                                <li>
                                                                    <div className="qty-btn" onClick={() => handleToggle(index)}>
                                                                        quantity
                                                                    </div>
                                                                    <div className={`quantity-area ${activeIndex === index ? "active" : ""}`}>
                                                                        <div className="quantity">
                                                                            <a className="quantity__minus" onClick={() => handleDecrement(index)}>
                                                                                <span><i className="bi bi-dash" /></span>
                                                                            </a>
                                                                            <input
                                                                                name="quantity"
                                                                                type="text"
                                                                                className="quantity__input"
                                                                                value={product.quantity}
                                                                                onChange={(e) => handleQuantityChange(index, e.target.value)}
                                                                            />
                                                                            <a className="quantity__plus" onClick={() => handleIncrement(index)}>
                                                                                <span><i className="bi bi-plus" /></span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-label="Price"><span>${product.price.toFixed(2)}</span></td>
                                                <td data-label="Total">${(product.price * product.quantity).toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <Link href="/shop" className="details-button">
                                    Continue Shoping
                                </Link>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="col-xl-4 col-lg-5">
                            <div className="cart-order-sum-area">
                                <div className="cart-widget-title">
                                    <h4>Order Summary</h4>
                                </div>
                                <div className="order-summary-wrap">
                                    <ul className="order-summary-list">
                                        <li>
                                            <strong>Sub Total</strong>
                                            <strong>${subTotal.toFixed(2)}</strong>
                                        </li>
                                        <li>
                                            Shipping
                                            <div className="order-info">
                                                <p>Shipping Free*</p>
                                                <span>Pickup fee ${pickupFee.toFixed(2)}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="coupon-area">
                                                <span>Coupon Code</span>
                                                <form>
                                                    <div className="form-inner">
                                                        <input type="text" placeholder="Your code" />
                                                        <button type="submit" className="apply-btn">Apply</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>
                                        <li>
                                            <strong>Total</strong>
                                            <strong>${total.toFixed(2)}</strong>
                                        </li>
                                    </ul>
                                    <Link href="/checkout" className="primary-btn3 two btn-hover mt-40">
                                        Processed Checkout
                                        <span />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterTop />
            <Footer1/>
        </>
    );
};

export default CartPage;
