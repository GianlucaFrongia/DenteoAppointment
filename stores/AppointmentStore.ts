interface Appointment {
    from: Date;
    to: Date;
}

export const AppointmentStore = defineStore("AppointmentStore", {
    state: () => ({
        wochenTage: { "Montag": 4, "Dienstag": 5, "Mittwoch": 6, "Donnerstag": 7 },
        weeklyAppointments: [] as Appointment[],
        timeSlots: [] as String[],
        options: { weekday: "long" } as {},
    }),


    actions: {
        setAppointment(from: Date, to: Date) {
            this.weeklyAppointments.push({ from: from, to: to })
        },

        setTimeSlot(slot: String) {
            this.timeSlots.push(slot)
        },

        getCurrentDaySlot(day: String) {

            return
        }
    },
})



if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(AppointmentStore, import.meta.hot));
}
