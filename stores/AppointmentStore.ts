export const AppointmentStore = defineStore("AppointmentStore", {
    state: () => ({
        weekDays: { "Montag": 4, "Dienstag": 5, "Mittwoch": 6, "Donnerstag": 7 } as Readonly<{}>,
        timeInterval: 30 as Readonly<number>,
        weeklyAppointments: [] as Appointment[],
        timeSlots: [] as String[],
    }),


    actions: {
        setAppointment(from: Date, to: Date) {
            this.weeklyAppointments.push({ from: from, to: to })
        },

        setTimeSlot(slot: String) {
            this.timeSlots.push(slot)
        },
    },
})



if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(AppointmentStore, import.meta.hot));
}
