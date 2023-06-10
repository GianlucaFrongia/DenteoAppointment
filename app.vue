<template>
  <div class="container">

    <div class="tag" v-for="tage in Object.keys(store.wochenTage)">
      <h2>{{ tage }}</h2>
      <div v-for="time in store.timeSlots">
        <TimeSlot :tag="tage" :time="time" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
// v-if="tage === new Intl.DateTimeFormat('de-DE', store.options).format(time)"

const store = AppointmentStore();
const startTime = 8;
const endTime = 18;
const timeInterval = 30;

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
    for (let l = 0; l < 60 / timeInterval; l++) {
      store.setTimeSlot(('0' + hour).slice(-2) + ":" + ('0' + l * timeInterval).slice(-2) + ":00")
    }
  }


  //new Date("2021-01-0" + day + "T" + ('0' + hour).slice(-2) + ":" + ('0' + l * timeInterval).slice(-2) + ":00")
  for (let i = 0; i < weeklyAppointments.length; i++) {
    store.setAppointment(new Date(weeklyAppointments[i].from), new Date(weeklyAppointments[i].to))
  }

})


/*
 <li v-for="app in store.weeklyAppointments">
      {{ new Intl.DateTimeFormat("de-DE", store.options).format(app.from) }} {{ app.to.getMinutes() }}
    </li>
*/

</script>

<style scoped>
.container {
  display: flex;
}

.tag {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
}
</style>
