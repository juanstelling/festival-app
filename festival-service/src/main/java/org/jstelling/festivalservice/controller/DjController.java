package org.jstelling.festivalservice.controller;

import org.jstelling.festivalservice.model.Dj;
import org.jstelling.festivalservice.service.DjService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/djs")
@CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.GET, RequestMethod.PUT, RequestMethod.POST, RequestMethod.DELETE})
public class DjController {

    private DjService djService;

    public DjController(DjService djService) { this.djService = djService;}

    @GetMapping
    public List<Dj> getDjs() {return djService.findall();}

    @GetMapping
    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Dj get(@PathVariable Long id) {
        return djService.getById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Dj create(@Validated @RequestBody final Dj dj) {
        return djService.createDj(dj);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Dj update(@PathVariable Long id, @Validated @RequestBody Dj dj) {
        return djService.updateDj(id, dj);
    }

    @RequestMapping(value = "{id}" ,method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        djService.deleteDj(id);
    }
}
