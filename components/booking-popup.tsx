"use client"

import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface BookingPopupProps {
    isOpen: boolean
    onClose: () => void
}

const countryOptions = [
    { code: "+91", flag: "🇮🇳", name: "India" },
    { code: "+1", flag: "🇺🇸", name: "USA" },
    { code: "+44", flag: "🇬🇧", name: "UK" },
    { code: "+61", flag: "🇦🇺", name: "Australia" },
    { code: "+971", flag: "🇦🇪", name: "UAE" },
    { code: "+65", flag: "🇸🇬", name: "Singapore" },
]

const businessTypes = ["Startup", "Small Business", "Enterprise", "E-commerce", "Non-profit", "Other"]
const budgetRanges = ["₹5,00,000 - ₹10,00,000", "₹10,00,000 - ₹25,00,000", "₹25,00,000 - ₹50,00,000", "₹50,00,000+"]
const timelines = ["ASAP", "Within 1 month", "1-3 months", "3-6 months", "Just exploring"]
const preferredModes = ["Phone Call", "Video Call", "In-Person Meeting", "Email"]

export function BookingPopup({ isOpen, onClose }: BookingPopupProps) {
    const [selectedServices, setSelectedServices] = useState<string[]>([])
    const [phoneNumber, setPhoneNumber] = useState("")
    const [countryCode, setCountryCode] = useState("+91")
    const [phoneError, setPhoneError] = useState("")
    const [businessType, setBusinessType] = useState("")
    const [turnover, setTurnover] = useState("")
    const [budget, setBudget] = useState("")
    const [timeline, setTimeline] = useState("")
    const [timezone, setTimezone] = useState("asia-kolkata")
    const [mode, setMode] = useState("")

    const validatePhoneNumber = (phone: string, code: string) => {
        // Remove any non-digit characters
        const cleanPhone = phone.replace(/\D/g, "")

        // Validation rules based on country code
        const validationRules: { [key: string]: { length: number; pattern: RegExp; errorMsg?: string } } = {
            "+91": {
                length: 10,
                pattern: /^[6-9]\d{9}$/,
                errorMsg: "Indian mobile numbers must start with 6, 7, 8, or 9"
            },
            "+1": {
                length: 10,
                pattern: /^\d{10}$/
            },
            "+44": {
                length: 10,
                pattern: /^\d{10,11}$/
            },
            "+61": {
                length: 9,
                pattern: /^[2-9]\d{8}$/
            },
            "+971": {
                length: 9,
                pattern: /^[5]\d{8}$/
            },
            "+65": {
                length: 8,
                pattern: /^[689]\d{7}$/
            },
        }

        const rule = validationRules[code]

        if (!cleanPhone) {
            setPhoneError("Phone number is required")
            return false
        }

        if (cleanPhone.length < rule.length) {
            setPhoneError(`Phone number must be at least ${rule.length} digits`)
            return false
        }

        if (!rule.pattern.test(cleanPhone)) {
            setPhoneError(rule.errorMsg || `Invalid phone number format for ${code}`)
            return false
        }

        setPhoneError("")
        return true
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        // Only allow digits and spaces
        const cleanValue = value.replace(/[^\d\s]/g, "")
        setPhoneNumber(cleanValue)
        // Clear error while typing
        setPhoneError("")
    }

    const handlePhoneBlur = () => {
        // Validate only when user finishes entering the number
        if (phoneNumber) {
            validatePhoneNumber(phoneNumber, countryCode)
        }
    }

    const handleCountryCodeChange = (value: string) => {
        setCountryCode(value)
        // Only validate if phone number exists and user has finished entering it
        if (phoneNumber && phoneError) {
            validatePhoneNumber(phoneNumber, value)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Validate phone number before submission
        const isPhoneValid = validatePhoneNumber(phoneNumber, countryCode)

        if (!isPhoneValid) {
            return
        }

        // Handle form submission
        console.log("Form submitted")
        onClose()
    }

    const toggleService = (service: string) => {
        setSelectedServices((prev) =>
            prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
        )
    }

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl my-8"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-lg">
                    <h2 className="text-xl font-bold text-red-600">Get in Touch with us</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[calc(90vh-80px)] overflow-y-auto">
                    {/* Row 1: Name, Phone, Email */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-1">
                            <Label htmlFor="popup-name" className="text-xs font-semibold text-gray-700 uppercase">
                                Your Name *
                            </Label>
                            <Input id="popup-name" placeholder="" required className="h-9 text-sm" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="popup-phone" className="text-xs font-semibold text-gray-700 uppercase">
                                Phone Number *
                            </Label>
                            <div className="flex gap-1">
                                <Select value={countryCode} onValueChange={handleCountryCodeChange}>
                                    <SelectTrigger className="h-9 w-28 text-sm">
                                        <SelectValue>
                                            {countryOptions.find(c => c.code === countryCode) && (
                                                <span className="flex items-center gap-1">
                                                    <span className="text-lg">{countryOptions.find(c => c.code === countryCode)?.flag}</span>
                                                    <span>{countryCode}</span>
                                                </span>
                                            )}
                                        </SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {countryOptions.map((country) => (
                                            <SelectItem key={country.code} value={country.code}>
                                                <span className="flex items-center gap-2">
                                                    <span className="text-lg">{country.flag}</span>
                                                    <span className="font-medium">{country.code}</span>
                                                    <span className="text-gray-500">({country.name})</span>
                                                </span>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Input
                                    id="popup-phone"
                                    type="tel"
                                    placeholder="91234 56789"
                                    value={phoneNumber}
                                    onChange={handlePhoneChange}
                                    onBlur={handlePhoneBlur}
                                    required
                                    className={`h-9 text-sm flex-1 ${phoneError ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                                />
                            </div>
                            {phoneError && (
                                <p className="text-xs text-red-600 mt-1">{phoneError}</p>
                            )}
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="popup-email" className="text-xs font-semibold text-gray-700 uppercase">
                                Email *
                            </Label>
                            <Input id="popup-email" type="email" placeholder="" required className="h-9 text-sm" />
                        </div>
                    </div>

                    {/* Row 2: Company Name, Website */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <Label htmlFor="popup-company" className="text-xs font-semibold text-gray-700 uppercase">
                                Company Name *
                            </Label>
                            <Input id="popup-company" placeholder="" required className="h-9 text-sm" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="popup-website" className="text-xs font-semibold text-gray-700 uppercase">
                                Website Link (Optional)
                            </Label>
                            <Input id="popup-website" type="url" placeholder="" className="h-9 text-sm" />
                        </div>
                    </div>

                    {/* Row 3: Business Type, Company Turnover */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <Label htmlFor="popup-business-type" className="text-xs font-semibold text-gray-700 uppercase">
                                Business Type *
                            </Label>
                            <Select value={businessType} onValueChange={setBusinessType} required>
                                <SelectTrigger className="h-9 text-sm">
                                    <SelectValue placeholder="please select" />
                                </SelectTrigger>
                                <SelectContent>
                                    {businessTypes.map((type) => (
                                        <SelectItem key={type} value={type.toLowerCase()}>
                                            {type}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="popup-turnover" className="text-xs font-semibold text-gray-700 uppercase">
                                Company Turnover (₹) *
                            </Label>
                            <Select value={turnover} onValueChange={setTurnover} required>
                                <SelectTrigger className="h-9 text-sm">
                                    <SelectValue placeholder="please select" />
                                </SelectTrigger>
                                <SelectContent>
                                    {budgetRanges.map((budget) => (
                                        <SelectItem key={budget} value={budget}>
                                            {budget}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Row 4: Services Checkboxes */}
                    <div className="space-y-2">
                        <Label className="text-xs font-semibold text-gray-700 uppercase">
                            What Services Are You Looking For? *
                        </Label>
                        <div className="grid grid-cols-3 gap-3">
                            {["SEO", "Lead Generation/PPC", "Social Media Management", "Website Design", "E-Commerce", "Other"].map(
                                (service) => (
                                    <div key={service} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`service-${service}`}
                                            checked={selectedServices.includes(service)}
                                            onCheckedChange={() => toggleService(service)}
                                        />
                                        <label
                                            htmlFor={`service-${service}`}
                                            className="text-sm text-gray-700 cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {service}
                                        </label>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Row 5: Monthly Budget, Timeline */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <Label htmlFor="popup-budget" className="text-xs font-semibold text-gray-700 uppercase">
                                Monthly Budget (₹) *
                            </Label>
                            <Select value={budget} onValueChange={setBudget} required>
                                <SelectTrigger className="h-9 text-sm">
                                    <SelectValue placeholder="please select" />
                                </SelectTrigger>
                                <SelectContent>
                                    {budgetRanges.map((budget) => (
                                        <SelectItem key={budget} value={budget}>
                                            {budget}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="popup-timeline" className="text-xs font-semibold text-gray-700 uppercase">
                                How Soon Would You Like to Get Started? *
                            </Label>
                            <Select value={timeline} onValueChange={setTimeline} required>
                                <SelectTrigger className="h-9 text-sm">
                                    <SelectValue placeholder="please select" />
                                </SelectTrigger>
                                <SelectContent>
                                    {timelines.map((timeline) => (
                                        <SelectItem key={timeline} value={timeline.toLowerCase()}>
                                            {timeline}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Row 6: Preferred Date & Time, Timezone, Preferred Mode */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-1">
                            <Label htmlFor="popup-datetime" className="text-xs font-semibold text-gray-700 uppercase">
                                Preferred Date & Time *
                            </Label>
                            <Input id="popup-datetime" type="datetime-local" required className="h-9 text-sm" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="popup-timezone" className="text-xs font-semibold text-gray-700 uppercase">
                                Preferred Timezone *
                            </Label>
                            <Select value={timezone} onValueChange={setTimezone} required>
                                <SelectTrigger className="h-9 text-sm">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="asia-kolkata">Asia/Kolkata</SelectItem>
                                    <SelectItem value="america-new-york">America/New York</SelectItem>
                                    <SelectItem value="europe-london">Europe/London</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="popup-mode" className="text-xs font-semibold text-gray-700 uppercase">
                                Preferred Mode *
                            </Label>
                            <Select value={mode} onValueChange={setMode} required>
                                <SelectTrigger className="h-9 text-sm">
                                    <SelectValue placeholder="please select" />
                                </SelectTrigger>
                                <SelectContent>
                                    {preferredModes.map((mode) => (
                                        <SelectItem key={mode} value={mode.toLowerCase()}>
                                            {mode}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                        <Label htmlFor="popup-message" className="text-xs font-semibold text-gray-700 uppercase">
                            Message *
                        </Label>
                        <Textarea
                            id="popup-message"
                            placeholder=""
                            className="min-h-[100px] text-sm resize-none"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-start pt-2">
                        <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8 h-9 text-sm font-semibold">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
