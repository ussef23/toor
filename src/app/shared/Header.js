'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import navigation from '../data/navigation.json'
import clsx from 'clsx'
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname()
  return (
    <header className="header">
      <div className="topbar bg-custom-blue">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="left-side">
                <ul className="custom-flex">
                  <li>
                    <a href="#" className="text-custom-white">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-custom-white">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-custom-white">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-custom-white">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="right-side">
                <ul className="custom-flex">
                  <li>
                    <a href="#" className="text-custom-white">Login</a>
                  </li>
                  <li>
                    <a href="#" className="text-custom-white">Signup</a>
                  </li>
                  <li>
                    <select>
                      <option>USD</option>
                      <option>INR</option>
                      <option>EURO</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation"
      // [ngClass]="windowScrolled ? 'sticky':''"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="main-navigation">
                <div className="logo">
                  <a href={"/"}>
                    <img src="assets/images/toor-logo.png" className="img-fluid image-fit" alt="img" />
                  </a>
                </div>
                <div className="main-menu"
                //  [ngClass]="navMethod ? 'active' : ''"
                >
                  <div className="logo">
                    <a href={"/"}>
                      <img src="assets/images/toor-logo.png" className="img-fluid image-fit" alt="img" />
                    </a>
                  </div>
                  <nav>
                    <ul className="custom-flex">
                      {navigation.map(item => (
                        <li
                          key={item.id}
                          className={clsx("menu-item", {
                            ['menu-item-has-children']: item.child
                          })}
                        >
                          <a
                            // href="#" 
                            // (click)="trigger(item)" *ngIf="item.child"

                            className="text-light-dark">
                            {item.linkText}
                            <span className="arrow"></span>
                          </a>
                          {!item.child && (
                            <a
                              href={item.link}
                              className="text-light-dark">
                              {item.linkText}
                            </a>
                          )}
                          {item.child && (
                            <ul className={clsx("sub-menu custom", {
                              ['d-block']: item.open,
                            })}
                            >
                              {item.submenu?.map(secondMenu => (
                                <li
                                  key={secondMenu.id}
                                  className={clsx("menu-item", {
                                    ['menu-item-has-children']: secondMenu.child
                                  })}
                                >
                                  <a href="#"
                                    //  (click)="trigger(item)" *ngIf="item.child"
                                    className="text-custom-white">
                                    {secondMenu.linkText}
                                    <span
                                      className="arrow"></span></a>
                                  {!secondMenu.child && (
                                    <a
                                      href={item.link}
                                      className="text-custom-white">
                                      {secondMenu.linkText}
                                    </a>
                                  )}
                                  {secondMenu.child && (
                                    <ul className={clsx("sub-menu custom", {
                                      ['d-block']: secondMenu.open
                                    })}
                                    >
                                      {secondMenu.submenu?.map(thirdMenu => (
                                        <li
                                          key={thirdMenu.id}
                                          className="menu-item"
                                        >
                                          <a
                                            href={item.link}
                                            className="text-custom-white">
                                            {thirdMenu.linkText}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}

                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="cta-btn">
                  <a href={"/booking"} className="btn-first btn-submit">Enquiry Now</a>
                  </div>
                </div>
                <div className="hamburger-menu"
                //  (click)="toggleNav()"
                >
                  <div className="menu-btn"
                  // [ngClass]="navMethod ? 'active' : ''"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div >
      </div >
      {/* < !--Navigation --> */}
    </header >
  )
}

export default Header