package org.jstelling.festivalservice.CmdRunner;

import org.jstelling.festivalservice.model.Dj;
import org.jstelling.festivalservice.model.Set;
import org.jstelling.festivalservice.repository.DjRepository;
import org.jstelling.festivalservice.repository.SetRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CmdRunner implements CommandLineRunner {

    private final DjRepository djRepository;
    private final SetRepository setRepository;

    public CmdRunner(DjRepository djRepository, SetRepository setRepository) {
        this.djRepository = djRepository;
        this.setRepository = setRepository;
    }

    @Override
    public void run(String... arg) {
        Dj dj1 = new Dj("Hardwell", "Very experiences Dj with a lot of enery", "Techno");
        Dj dj2 = new Dj("Martin Garrix", "Jack-of-all-trades", "Progressive house");
        Dj dj3 = new Dj("Harvey", "Travels all over the world to give greate performance.", "Dancepop");
        Dj dj4 = new Dj("Ballistic", "Future bass king", "Future bass");
        Dj dj5 = new Dj("Agita", "The best for big room house", "Big Room house");
        Dj dj6 = new Dj("Snake", "Allround techno dj.", "Techno");

        Set set1 = new Set("Summer vibes", "Stage 1", "Saturday", "14:00", 12);
        Set set2 = new Set("Malize", "Stage 2", "Saturday", "16:00", 12);
        Set set3 = new Set("Festicz", "Stage 3", "Saturday", "21:00", 12);
        Set set4 = new Set("Pump it up", "Stage 4", "Sunday", "19:00", 12);
        Set set5 = new Set("Colorful", "Stage 5", "Sunday", "15:00", 12);
        Set set6 = new Set("Wezzu", "Stage 6", "Sunday", "16:00", 12);

        djRepository.saveAll(List.of(dj1, dj2, dj3, dj4, dj5, dj6));
        setRepository.saveAll(List.of(set1, set2, set3, set4, set5, set6));
    }
}
