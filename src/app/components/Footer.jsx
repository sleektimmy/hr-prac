import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="flex flex-col items-center justify-center bg-slate-950">
            <p className="text-slate-100 text-sm py-4">© 2023 HR Platform. All rights reserved.</p>
            <p className="text-slate-100 text-sm">Follow us on social media</p>
            <div className="flex space-x-4 mt-2">
            <a href="#" className="text-green-600 hover:text-green-400">Facebook</a>
            <a href="#" className="text-green-600 hover:text-green-400">Twitter</a>
            <a href="#" className="text-green-600 hover:text-green-400">LinkedIn</a>
            </div>
        </footer>
    </div>
  )
}
