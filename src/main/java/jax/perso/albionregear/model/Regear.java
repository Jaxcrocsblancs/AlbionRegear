package jax.perso.albionregear.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class Regear {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private final String pseudo;
    private final String url;
    private final String image;

    public Regear(String pseudo, String url, String image) {
        this.pseudo = pseudo;
        this.url = url;
        this.image = image;
    }

    public Regear() {
        this.pseudo = null;
        this.url = null;
        this.image = null;
    }

    @Override
    public String toString() {
        return "Regear{" +
                "id=" + id +
                ", pseudo='" + pseudo + '\'' +
                ", url='" + url + '\'' +
                ", image='" + image + '\'' +
                '}';
    }
}
