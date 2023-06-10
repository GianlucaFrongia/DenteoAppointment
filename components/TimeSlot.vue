<template>
    <div class="time" :class="{ taken: isTaken }"> {{ time }} {{ isTaken }} {{ store.wochenTage[props.tag] }}</div>
</template>

<script lang="ts" setup>
import { on } from 'events';

const store = AppointmentStore();
const isTaken = ref(false)
const date = computed<Date>(() => { return new Date("2021-01-0" + store.wochenTage[props.tag] + "T" + props.time) })

interface Appointment {
    from: Date;
    to: Date;
}
const props = defineProps<{
    time?: String
    tag?: String
}>()



watch(store.weeklyAppointments, () => {

})


onMounted(() => {
    check(store.weeklyAppointments)
    if (props.time === "12:00:00" || props.time === "12:30:00") {
        isTaken.value = true
    }
})

function check(weeklyAppointments: Appointment[]) {
    weeklyAppointments.forEach(element => {
        if (date.value.getTime() === element.from.getTime() && date.value.getTime() <= element.to.getTime()) {
            return isTaken.value = true
        }

        if (date.value.getTime() > element.from.getTime() && date.value.getTime() < element.to.getTime()) {
            return isTaken.value = true
        }
    });
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