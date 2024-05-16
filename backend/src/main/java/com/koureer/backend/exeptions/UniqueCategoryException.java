package com.koureer.backend.exeptions;

import org.springframework.context.i18n.LocaleContextHolder;

public class UniqueCategoryException extends RuntimeException {
        public UniqueCategoryException() {
        super(com.koureer.backend.shared.Messages.getMessageForLocale("Category name in use", LocaleContextHolder.getLocale()));
    }
}
