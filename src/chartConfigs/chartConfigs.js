export const hisoryOptions = {
    lineHeightAnnotation: {
        always: true,
        hover: false,
        lineWeight: 1.5
    },
    animation: {
        duration: 2000
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        xAxes: [
            {
                type: 'time',
                distribution: 'linear'
            },
        ],
    },
};

export const chartStyle = {
    hoverBackgroundColor: "#292a73",
    backgroundColor: "#29b5ce91",
    borderColor: "#29b5ce",
    pointRadius: 1,
}