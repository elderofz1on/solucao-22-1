timeanddate.onMinuteChanged(function () {
    HackbitOLEDDisplay.clear()
    HackbitOLEDDisplay.writeStringNewLine(timeanddate.date(timeanddate.DateFormat.YYYY_MM_DD))
    HackbitOLEDDisplay.writeStringNewLine(timeanddate.time(timeanddate.TimeFormat.HHMM24hr))
})
timeanddate.setDate(9, 13, 2021)
timeanddate.setTime(1, 9, 0, timeanddate.MornNight.PM)
HackbitOLEDDisplay.init(128, 64)
HackbitOLEDDisplay.clear()
