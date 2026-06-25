"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
// import { Overview } from "@/components/overview"
// import { Configuration } from "@/components/configuration"
// import { Amenities } from "@/components/amenities"
// import { Gallery } from "@/components/gallery"
// import { Location } from "@/components/location"
import {ProjectCard} from "@/components/ProjectCard"
// import { ContactForm } from "@/components/contact-form"
// import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
// import LifestyleHighlights from "@/components/LifestyleHighlights"
// import PrimeConnectivity from "@/components/PrimeConnectivity"
import { EnquiryPopup } from "@/components/enquiry-popup"
import { useEffect, useState } from "react"
import { ProjectTable } from "@/components/ProjectTable"
import { PriceSection } from "@/components/PriceSection"
import { PlanSection } from "@/components/PlanSection"
import { Amenitiess } from "@/components/Amenitiess"
import { Galleryy } from "@/components/Galleryy"
import { LocationSarjaPur } from "@/components/LocationSarjaPur"
import EnquirySection from "@/components/EnquirySection"
import ReraSection from "@/components/ReraSection"

export default function Home() {
    const [openPopup, setOpenPopup] = useState(false)
useEffect(() => {
    const handleScroll = () => {
      setOpenPopup(true)

      // remove event after first scroll
      window.removeEventListener("scroll", handleScroll)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className="min-h-screen pb-16 lg:pb-0">
      <Header />
      <Hero />
      <ProjectTable/>
      <ProjectCard/>
      <PriceSection/>
      <PlanSection/>
      <Amenitiess/>
      <Galleryy/>
      <LocationSarjaPur/>
      <EnquirySection/>
      <ReraSection/>
      {/* <Overview /> */}
      {/* <LifestyleHighlights/>
      <Configuration />
      <Amenities />
      <Gallery /> */}
      {/* <Location /> */}
      {/* <PrimeConnectivity/> */}
      {/* <ContactForm />
      <Footer /> */}
      <StickyCTA />
      <EnquiryPopup open={openPopup} onOpenChange={setOpenPopup} />
    </main>
  )
}
