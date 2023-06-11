<template>
  <h1>Denteo Appointment</h1>
  <svg class="freeslots" width="180px" height="180px" viewBox="0 0 180 180">
    <path
      d="M111.140156,21.1415625 C111.140156,9.46546875 101.676094,0 90,0 C78.3239063,0 68.8584375,9.46546875 68.8584375,21.1415625 C68.8584375,27.7171875 60.9075,31.010625 56.2584375,26.3601563 C48.0023437,18.1054688 34.61625,18.1054688 26.3601562,26.3601563 C18.1040625,34.6176563 18.1040625,48.0023438 26.3601562,56.2584375 C31.010625,60.9089063 27.7171875,68.8598438 21.1401563,68.8598438 C9.46546875,68.8598438 0,78.3253125 0,90 C0,101.676094 9.46546875,111.141563 21.1401563,111.141563 C27.7171875,111.141563 31.010625,119.0925 26.3601562,123.741563 C18.1040625,131.999063 18.1040625,145.38375 26.3601562,153.639844 C34.61625,161.895938 48.0023437,161.895938 56.2584375,153.639844 C60.9075,148.990781 68.8584375,152.282813 68.8584375,158.858438 C68.8584375,170.534531 78.3239063,180 90,180 C101.676094,180 111.140156,170.534531 111.140156,158.858438 C111.140156,152.282813 119.091094,148.990781 123.741563,153.639844 C131.997656,161.895938 145.38375,161.895938 153.639844,153.639844 C161.895938,145.38375 161.895938,131.999063 153.639844,123.741563 C148.989375,119.0925 152.282813,111.141563 158.858438,111.141563 C170.533125,111.141563 180,101.676094 180,90 C180,78.3253125 170.533125,68.8598438 158.858438,68.8598438 C152.282813,68.8598438 148.989375,60.9089063 153.639844,56.2584375 C161.895938,48.0023438 161.895938,34.6176563 153.639844,26.3601563 C145.38375,18.1054688 131.997656,18.1054688 123.741563,26.3601563 C119.091094,31.0120313 111.140156,27.7171875 111.140156,21.1415625"
      id="Fill" fill="#66F1B8" />
    <text x="30" y="90">
      Noch {{ store.getFreeSlots }} Slots
    </text>
  </svg>
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

<style>
body {
  font-family: "Sono", Helvetica, sans-serif;
  text-align: center;
}

.freeslots {
  position: absolute;
  right: 100px;

}

#Fill {
  animation: ckw 10s linear infinite;
  transform-origin: center;
}

@keyframes ckw {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.container {
  display: flex;
  justify-content: center;
}

.day {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
}
</style>
