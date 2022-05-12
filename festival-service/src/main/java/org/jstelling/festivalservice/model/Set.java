package org.jstelling.festivalservice.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Set {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long setId;
    private String setName;
    private String setStage;
    private String setDay;
    private String setBeginTime;
    private int setDuration;

    public Set() {}

    public Set(String setName, String setStage, String setDay, String setBeginTime, int setDuration) {
        this.setName = setName;
        this.setStage = setStage;
        this.setDay = setDay;
        this.setBeginTime = setBeginTime;
        this.setDuration = setDuration;
    }

    public Long getSetId() {
        return setId;
    }

    public void setSetId(Long setId) {
        this.setId = setId;
    }

    public String getSetName() {
        return setName;
    }

    public void setSetName(String setName) {
        this.setName = setName;
    }

    public String getSetStage() {
        return setStage;
    }

    public void setSetStage(String setStage) {
        this.setStage = setStage;
    }

    public String getSetDay() {
        return setDay;
    }

    public void setSetDay(String setDay) {
        this.setDay = setDay;
    }

    public String getSetBeginTime() {
        return setBeginTime;
    }

    public void setSetBeginTime(String setBeginTime) {
        this.setBeginTime = setBeginTime;
    }

    public int getSetDuration() {
        return setDuration;
    }

    public void setSetDuration(int setDuration) {
        this.setDuration = setDuration;
    }

}
