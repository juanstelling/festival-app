package org.jstelling.festivalservice.service;

import org.jstelling.festivalservice.model.Dj;
import org.jstelling.festivalservice.repository.DjRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class DjService {

    private final DjRepository djRepository;

    public DjService(DjRepository djRepository) { this.djRepository = djRepository;}

    public List<Dj> findall() {return djRepository.findAll();}

    public Dj getById(Long id) {
        var dj = djRepository.findById(id);
        if (dj.isPresent()) {
            return dj.get();
        } else {
            throw new NoSuchElementException("Dj doesn't exist");
        }
    }

    public Dj createDj(final Dj dj) {
        return djRepository.saveAndFlush(dj);
    }

    public Dj updateDj(Long id, Dj dj) {
        if (djRepository.findById(id).isPresent()) {
            Dj existingDj = djRepository.findById(id).get();
            BeanUtils.copyProperties(dj, existingDj, "djId");
            return djRepository.saveAndFlush(existingDj);
        } else throw new RuntimeException("Dj not found");
    }

    public void deleteDj(Long id) {
        djRepository.deleteById(id);
    }
}
