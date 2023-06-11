<template>
  <div class="container">

    <section class="day" v-for="(dayNumber, day) in store.weekDays">
      <h2>{{ day }}</h2>
      <div>
        <TimeSlot :key="index" :dayNumber="dayNumber" :time="time" v-for="(time, index) in store.timeSlots" />
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const store = AppointmentStore();
const startTime = 8;
const endTime = 18;

const weeklyAppointments = [
  /*Montag*/{ from: "2021-01-04T10:00:00", to: "2021-01-04T10:30:00" },
  /*Dienstag*/ { from: "2021-01-05T11:00:00", to: "2021-01-05T11:30:00" },
  /*Dienstag*/{ from: "2021-01-05T15:30:00", to: "2021-01-05T16:30:00" },
  /*Mittwoch*/{ from: "2021-01-06T10:00:00", to: "2021-01-06T10:30:00" },
  /*Mittwoch*/{ from: "2021-01-06T11:00:00", to: "2021-01-06T12:30:00" },
  /*Mittwoch*/{ from: "2021-01-06T17:30:00", to: "2021-01-06T18:00:00" },
];

onBeforeMount(() => {
  for (let hour = startTime; hour < endTime; hour++) {
    for (let min = 0; min < 60 / store.timeInterval; min++) {
      store.setTimeSlot(('0' + hour).slice(-2) + ":" + ('0' + min * store.timeInterval).slice(-2) + ":00")
    }
  }

  for (let i = 0; i < weeklyAppointments.length; i++) {
    store.setAppointment(new Date(weeklyAppointments[i].from), new Date(weeklyAppointments[i].to))
  }
})
</script>

<style scoped>
.container {
  display: flex;
}

.day {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
}
</style>
