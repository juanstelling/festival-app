package org.jstelling.festivalservice.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Dj {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long djId;
    private String djName;
    private String djBio;
    private String djGenre;

    public Dj() {}

    public Dj(String djName, String djBio, String djGenre) {
        this.djName = djName;
        this.djBio = djBio;
        this.djGenre = djGenre;
    }

    public Long getDjId() {return djId;}

    public void setDjId(Long djId) {this.djId = djId;}

    public String getDjName() {return djName;}

    public void setDjName(String djName) {this.djName = djName;}

    public String getDjBio() {return djBio;}

    public void setDjBio(String djBio) {this.djBio = djBio;}

    public String getDjGenre() {return djGenre;}

    public void setDjGenre(String djGenre) {this.djGenre = djGenre;}
}
