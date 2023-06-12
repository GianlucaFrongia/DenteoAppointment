type AppointmentStoreState = {
    searchRange: number[]
    timeInterval: number
    weeklyAppointments: Appointment[]
    timeSlots: String[]
    freeSlots: Set<Date>
}

export const AppointmentStore = defineStore("AppointmentStore", {
    state: (): AppointmentStoreState => ({
        searchRange: [4, 5, 6, 7, 8],
        timeInterval: 30,
        weeklyAppointments: [],
        timeSlots: [],
        freeSlots: new Set
    }),
    getters: {
        getFreeSlots: (state): number => state.freeSlots.size
    },

    actions: {
        setAppointment(from: Date, to: Date): void {
            this.weeklyAppointments.push({ from: from, to: to })
        },
        setTimeSlot(slot: String): void {
            this.timeSlots.push(slot)
        },
        setFreeSlot(slot: Date): void {
            this.freeSlots.add(slot)
        },
        removeFreeSlot(slot: Date): void {
            this.freeSlots.delete(slot)
        }
    },
})



if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(AppointmentStore, import.meta.hot));
}
