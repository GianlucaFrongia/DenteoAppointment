<template>
    <div class="time" @click="!isTaken ? setAppointment() : {}" :class="{ taken: isTaken }">{{ time }}</div>
</template>

<script lang="ts" setup>
const store = AppointmentStore();
const isTaken = ref(false)
const props = defineProps<{
    time: String
    day: Number
}>()
const date: Date = new Date("2021-01-0" + props.day + "T" + props.time + ":00")

watch(isTaken, (state) => {
    if (state) {
        store.removeFreeSlot(date)
    }
})

onBeforeMount(() => {
    checkIfTaken(store.weeklyAppointments)
    if (props.time === "12:00" || props.time === "12:30") {
        isTaken.value = true
    }
    if (isTaken.value === false) {
        store.setFreeSlot(date)
    }
})

function setAppointment() {
    const toDate = new Date(date.getTime() + store.timeInterval * 60000)
    store.setAppointment(date, toDate)
    isTaken.value = true
}

function checkIfTaken(weeklyAppointments: Appointment[]): void {
    for (let i = 0; i < weeklyAppointments.length; i++) {
        if (date.getTime() === weeklyAppointments[i].from.getTime()) {
            isTaken.value = true
        }
        if (date.getTime() > weeklyAppointments[i].from.getTime() && date.getTime() < weeklyAppointments[i].to.getTime()) {
            isTaken.value = true
        }
    }
}

</script>

<style scoped>
.time {
    border: 2px solid #66f1b8;
    padding: 5px;
    border-radius: 4px;
    margin-bottom: 5px;
    cursor: pointer;
}

.time:hover {
    background-color: #5bd8a5;
}

.taken {
    cursor: not-allowed;
    background-color: #d6d6d6;
}
</style>