import { Text, View } from "react-native";
import { styles, theme } from "./styles";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Button } from "../../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { useScheduleScreen } from "./useScheduleScreen";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

export function Schedule() {
  const insets = useSafeAreaInsets();

  const {
    hours,
    selectedHour,
    setSelectedHour,
    selectedDate,
    setSelectedDate,
    handleCreateSchedule,
    loadingCreateSchedule,
  } = useScheduleScreen();

  return (
    <View style={{ ...styles.container, bottom: insets.bottom || 48 }}>
      <View>
        <View style={styles.calendarContainer}>
          <Calendar
            theme={theme}
            onDayPress={(day) => setSelectedDate(day.dateString)}
            markedDates={{
              [selectedDate]: { selected: true },
            }}
            minDate={new Date().toDateString()}
            enableSwipeMonths
          />
        </View>
        <View style={styles.hourContainer}>
          <Text style={styles.label}>Horário</Text>
          <Picker
            selectedValue={selectedHour}
            onValueChange={(itemValue) => setSelectedHour(itemValue)}
          >
            {React.Children.toArray(
              hours.map((hour) => <Picker.Item label={hour} value={hour} />)
            )}
          </Picker>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          loading={loadingCreateSchedule}
          text="Confirmar reserva"
          onPress={handleCreateSchedule}
        />
      </View>
    </View>
  );
}
