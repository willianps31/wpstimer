import styles from './styles.module.css'

type timeName = 'Pomodoro' | 'Short Break' | 'Long Break' | 'Custom';

interface timeSelectorProps {
    name: timeName;
    selectedTime: string;
    selectTime: (name: timeName) => void;
}

export function TimeSelector({ name, selectedTime, selectTime }: timeSelectorProps) {
    let classes = [styles.container];
    selectedTime == name && classes.push(styles.selected)
    return <div className={classes.join(' ')} onClick={() => { selectTime(name) }}>
        <span>{name}</span>
    </div>
}