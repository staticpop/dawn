import { Application } from "@hotwired/stimulus"
import { Alert, Autosave, Dropdown, Modal, Tabs, Popover, Toggle, Slideover } from "tailwindcss-stimulus-components"

const application = Application.start();

application.register('alert', Alert)
application.register('autosave', Autosave)
application.register('dropdown', Dropdown)
application.register('modal', Modal)
application.register('tabs', Tabs)
application.register('popover', Popover)
application.register('toggle', Toggle)
application.register('slideover', Slideover)

// mb-10 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl m-auto justify-center justify-right justify-left w-100
