
import React from 'react';
import {
  SafeAreaView,
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {LocaleConfig} from 'react-native-calendars';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

LocaleConfig.locales['fr'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Decembro'
    ],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
    today: "today",
  };
  LocaleConfig.defaultLocale = 'fr';

const App = () => {
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};

  function clickDay () {
    Alert.alert('Insert respective function');
  }
  return (
    
    <ScrollView
    style={{backgroundColor: '#000000'}}>
    

    
      <Calendar
          style={{
            borderColor: 'black',
            backgroundColor: 'black',
            flex: 1,
          }} 
          horizntal={true}
          paginaçãoEnabled = { true }
          onVisibleMonthsChange = { ( month )  =>  { console . log ( 'agora esses meses estão visíveis' ,  month ) ; } }
          pastScrollRange = { 50 } 
          futureScrollRange = { 50 }
          scrollEnabled = { true } 
          showScrollIndicator = { true } 
          onDayPress={day => { clickDay(day)}}
          onDayLongPress={day => {
            console.log('selected day', day);
          }}
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          hideArrows={true}  renderArrow={direction => <Arrow />}
          hideExtraDays={false}
          disableMonthChange={false}
          hideDayNames={false}
          onPressArrowLeft={subtractMonth => subtractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          disableArrowLeft={true}
          disableArrowRight={true}
          disableAllTouchEventsForDisabledDays={false}
          disableTouchEvent={true}
          enableSwipeMonths={false}
          markingType={'multi-dot'}
          markedDates={{
            '2021-01-16': {selected: true, marked: true, selectedColor: 'blue'},
            '2021-01-17': {marked: true},
            '2021-01-18': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2021-01-19': {disabled: true, disableTouchEvent: true}
          }}
          theme={{
            backgroundColor: '#000000',
            calendarBackground: '#000000',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#ffffff',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'white',
            indicatorColor: 'blue',
            textDisabledColor: 'grey',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 20,
            textDayHeaderFontSize: 16,
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            'stylesheet.calendar.main': {
              dayContainer: {
                backgroundColor: 'black',
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 8,
                margin:2,
                flex:1,
                justifyContent: 'center',
                alignItems: 'center',
                height: 80,
              },
              week : { 
                marginTop : 10 , 
                flexDirection : 'row' , 
                justifyContent : 'space-between' 

              } 
            }
          }}
        />
      </ScrollView>
  );
};

export default App;